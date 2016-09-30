<header class="site-header" role="banner">
    <div class="container">

        <?php if ( is_front_page() && is_home() ) : ?>
        <h1 class="branding"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a></h1>
        <?php else : ?>
        <div class="branding"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a></div>
        <?php endif; ?>

        <nav class="site-nav">
            <?php get_template_part( 'partials/nav', 'primary' ); ?>
        </nav>

    </div>
</header>