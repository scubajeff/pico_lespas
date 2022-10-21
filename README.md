Ever since version 2.0, Les Pas has been able to share albums with other Nextcloud users, you can even co-edit the same album with others if you publish the album as '[Joint Album](https://github.com/scubajeff/lespas/blob/master/fastlane/metadata/android/en-US/images/phoneScreenshots/07_publish.png)'. But how about people not in your Nextcloud server, like those friends who attended your wedding? Create temporary guest accounts for them is just not feasible. Photo blog is here to help! And luckily, we have [Pico](https://picocms.org/), the stupidly simple & blazing fast, flat file CMS, which happens to have a very good Nextcloud [app]((https://apps.nextcloud.com/apps/cms_pico), enable us to publish our own blogs.  

Les Pas make very good use of this integration, and provides you with three choices of blog post templates in it's first release, Cascade, Magazine and Timeline.

<img alt="Blog template" src="https://repository-images.githubusercontent.com/555381925/1d4318d5-f961-4f25-8c1a-e76fffc1d1ea" width="400" />

**Cascade** is the simplest one, presenting your album in a two-columns list of photos. It's a good fit if you don't care much about annotating each one of them. On the contrary, **Magazine** is your choice when you have a lot to say. And **Timeline**, as the name says, is great for presenting your work in a time-base manner, like for the album of your kid.

Since Pico CMS team won't provide API for non-admin user to install new theme, you have to do it manually.

### Installation
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
5. Done! You can now go back to Les Pas app and start blogging.
