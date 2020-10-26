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
