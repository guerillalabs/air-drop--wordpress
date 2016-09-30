<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?php $description = get_bloginfo( 'description', 'display' );
		if ( $description || is_customize_preview() ) : ?>
		<meta name="description" content="<?php echo $description; ?>">
		<?php endif; ?>

	    <!-- CSS -->
	    <link rel='stylesheet' href='<?php echo get_stylesheet_directory_uri(); ?>/css/screen.css'>


	    <!-- FAVICON -->
	    <!-- use http://realfavicongenerator.net/ to generate the files and code for the favicon -->


	    <!-- JS -->
	    <script>var b = document.documentElement; b.className = b.className.replace(/\bno-js\b/,'js');</script>


        <?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>

        <?php get_template_part( 'partials/site', 'header' ); ?>

        <main class="site-main">
