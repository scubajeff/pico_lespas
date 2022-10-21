Install this theme to enable [Les Pas](https://github.com/scubajeff/lespas#readme)'s photo blog publishing feature. Since Pico CMS team won't provide API for non-admin user to install new theme, you have to do the installation manually.

## Installation
1. Install [Pico CMS](https://apps.nextcloud.com/apps/cms_pico)
2. Login to your Nextcloud instance, you need `root` privilege
  - Download the `pico_lespas` folder
  - Copy folder `pico_lespas` to `/<your Nextcloud data folder>/appdata_xxxxxxxxx/cms_pico/themes`. Don't change the name **`pico_lespas`**, or things will break. The folder content of `.../cms_pico/themes/pico_lespas/` should look like the following afterward
    ```
    css/
    fonts/
    images/
    js/
    sass/
    index.twig
    single.twig
    ```
  - Change the ownership of the created folder and all the files beneath it to `www-data.www-data` by `chown -R www-data.www-data /<your Nextcloud data folder>/appdata_xxxxxxxxx/cms_pico/themes/pico_lespas/`
3. Visit your Nexcloud page in the browser, logon as Nextcloud admin, go to Pico CMS setting, be aware that there are two Pico CMS items in the setting screen, make sure you select the one in 'Administration' section
4. Install `pico_lespas` theme
5. Done!
