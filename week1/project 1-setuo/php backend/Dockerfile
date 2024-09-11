# Use the official PHP image with Apache
FROM php:8.0-apache

# Install any PHP extensions you might need (uncomment if needed)
# RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy your application files to the Apache web root directory
COPY . /var/www/html

# Set the working directory
WORKDIR /var/www/html

# Give appropriate permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80 to allow external access
EXPOSE 80