use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use serde::{Deserialize, Serialize};
use std::sync::Mutex;
use uuid::Uuid;

#[derive(Serialize, Deserialize, Clone)]
struct InventoryItem {
    id: String,
    product_id: String,
    quantity: i32,
}

type Db = Mutex<Vec<InventoryItem>>;

async fn get_inventory(data: web::Data<Db>) -> impl Responder {
    let db = data.lock().unwrap();
    HttpResponse::Ok().json(&*db)
}

async fn add_item(item: web::Json<InventoryItem>, data: web::Data<Db>) -> impl Responder {
    let mut db = data.lock().unwrap();
    let mut new_item = item.into_inner();
    new_item.id = Uuid::new_v4().to_string();
    db.push(new_item.clone());
    HttpResponse::Created().json(new_item)
}

async fn update_item(
    item_id: web::Path<String>,
    item: web::Json<InventoryItem>,
    data: web::Data<Db>,
) -> impl Responder {
    let item_id_str = item_id.clone(); // ✅ Corrected — no .into_inner()
    let mut db = data.lock().unwrap();

    for stored_item in db.iter_mut() {
        if stored_item.id == item_id_str {
            stored_item.quantity = item.quantity;
            return HttpResponse::Ok().json(stored_item);
        }
    }
    HttpResponse::NotFound().body("Item not found")
}

async fn delete_item(item_id: web::Path<String>, data: web::Data<Db>) -> impl Responder {
    let item_id_str = item_id.clone(); // ✅ Corrected — no .into_inner()
    let mut db = data.lock().unwrap();
    db.retain(|item| item.id != item_id_str);
    HttpResponse::NoContent().finish()
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let inventory_data = web::Data::new(Mutex::new(Vec::<InventoryItem>::new()));

    println!("🚀 Inventory service running at http://0.0.0.0:3005");

    HttpServer::new(move || {
        App::new()
            .app_data(inventory_data.clone())
            .route("/inventory", web::get().to(get_inventory))
            .route("/inventory", web::post().to(add_item))
            .route("/inventory/{id}", web::put().to(update_item))
            .route("/inventory/{id}", web::delete().to(delete_item))
    })
    .bind(("0.0.0.0", 3005))?
    .run()
    .await
}
 
