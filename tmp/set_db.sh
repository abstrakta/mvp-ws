export PATH_TO_HERE="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Drop db.
sudo -i -u postgres dropdb abstrakta_db

# Drop db users.
sudo -i -u postgres dropuser abstrakta_dbuser
sudo -i -u postgres dropuser abstrakta_dbuser_admin

# Drop db migrations.
rm -rf /home/sphere0/Work/abs/mvp-ws/prisma/migrations

# Create db users.
sudo -i -u postgres createuser -d -r abstrakta_dbuser_admin
sudo -i -u postgres createuser abstrakta_dbuser

# Create db.
sudo -i -u postgres createdb abstrakta_db

# Set db user credentials.
sudo -i -u postgres psql -U postgres -c "ALTER USER abstrakta_dbuser PASSWORD 'abstrakta@Silence93!'"
sudo -i -u postgres psql -U postgres -c "ALTER USER abstrakta_dbuser_admin PASSWORD 'abstrakta@Silence93!'"

# Create db & seed.
npx prisma migrate dev --name init
npx prisma db seed

# Run web-service.
npm run dev
