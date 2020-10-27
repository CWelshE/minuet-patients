<!doctype html>
<html lang="{{app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,
        initial-scale=1">
        <title>Minuet Patients</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{ asset('js/app.js') }}" ></script>
        <style>
            /* This used to be in a `fontsource` package, but it has
               proven _quite_ difficult to get Jest to cooperate with
               Laravel's implicit config of Webpack in a timely manner,
               so it's here for now. */
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap');
            body,
            html,
            ul,
            div
            #root {
              margin: 0;
              padding: 0;
            }
        </style>
    </body>
</html>
