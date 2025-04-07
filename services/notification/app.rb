require 'sinatra'
require 'json'
require 'securerandom'

set :port, 3005
set :bind, '0.0.0.0'

# Simulated notifications store
NOTIFICATIONS = []

post '/notify' do
  request.body.rewind
  data = JSON.parse(request.body.read)

  if data['userId'] && data['type'] && data['message']
    notification = {
      id: SecureRandom.uuid,
      userId: data['userId'],
      type: data['type'],
      message: data['message']
    }
    NOTIFICATIONS << notification
    status 201
    content_type :json
    notification.to_json
  else
    status 400
    { error: 'Missing fields' }.to_json
  end
end

get '/notifications/:userId' do
  content_type :json
  user_id = params['userId']
  user_notifications = NOTIFICATIONS.select { |n| n[:userId] == user_id }
  user_notifications.to_json
end
