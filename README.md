# Minuet Patients Viewer

## Architecture
This application is built with Laravel and React. Laravel tests are
handled by its built-in facilities, while React tests are planned to be
handled by Jest (as is typical).

Laravel is primarily used as an API in this context - performing typical
RESTful actions to view, update, and delete Patients and Appointments.

### No Redux?
I don't think an application of this size warrants Redux. The API
surface is simply too small; at this stage, it would likely be more work
than it's worth. That being said, if this application were projected to
increase in scope and overall size, it would be a good idea to implement
Redux for decreasing confusion regarding state.

### Why Emotion?
In general, I've found that using a performant CSS-in-JS library leads
to increased developer productivity in the long-run. It's nice to have
all of your relevant styles included along with the React component that
you're viewing, and perhaps even nicer to have access to transformations
to CSS values inside of that context.

### Why I didn't use Laravel Homestead
When beginning development for this project, I was unsure whether
Homestead would increase or decrease the overall complexity and
development time. Thus, I opted not to use it - now, however, I think
that I will eventually encapsulate this project into that ecosystem, in
light of new knowledge gained as a result of developing in Laravel.

## Running the Project
To run the project locally, you'll need to run these commands after
cloning the repo:

- `npm i`
- `php artisan migrate`
- `php artisan db:seed --class=AppointmentsSeeder`
- `php artisan db:seed --class=PatientsSeeder`
- `php artisan serve`
(The seeders use Laravel Excel to parse the provided .csv files into
Laravel's Eloquent models, and thus into the database.)

You may need to enable `gd` and `iconv` in your `php.ini` file.
Additionally, please provide a PostgreSQL database called
`laravelDatabase` (or whatever you set it to in the configuration file).
This won't be required after I move the project to Laravel Homestead,
but hindsight is 20/20. :)
