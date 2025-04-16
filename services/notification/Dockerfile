# Use a minimal Ruby base image
FROM ruby:3.2-alpine

# Install dependencies
RUN apk add --no-cache build-base

# Set the working directory in the container
WORKDIR /app

# Copy the Gemfile and Gemfile.lock to install the dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the application files into the container
COPY . .

# Set environment to production
ENV RACK_ENV production

# Expose port 3005 for the Sinatra app
EXPOSE 3006

# Start the application using Ruby
CMD ["ruby", "app.rb"]
 
