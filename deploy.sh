#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create deployment directory
echo "Creating deployment directory..."
mkdir -p dist/deploy

# Copy build files to deployment directory
echo "Copying build files..."
cp -r dist/public/* dist/deploy/

# Create .htaccess file for Apache
echo "Creating .htaccess file..."
cat > dist/deploy/.htaccess << EOL
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
EOL

echo "Deployment package created in dist/deploy"
echo "To deploy:"
echo "1. Copy the contents of dist/deploy to your Raspberry Pi's /var/www/html/portfolio directory"
echo "2. Make sure Apache is configured with the provided apache-config.conf"
echo "3. Restart Apache: sudo systemctl restart apache2" 