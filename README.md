Ever since version 2.0, Les Pas has been able to share albums with other Nextcloud users, you can even co-edit the same album with others if you publish the album as '[Joint Album](https://github.com/scubajeff/lespas/blob/master/fastlane/metadata/android/en-US/images/phoneScreenshots/07_publish.png)'. But how about people not in your Nextcloud server, like those friends who attended your wedding? Creating temporary guest accounts for them is just not feasible. Photo blog is here to help! And luckily, we have [Pico](https://picocms.org/), the stupidly simple & blazing fast, flat file CMS, which happens to have a very good Nextcloud [app]((https://apps.nextcloud.com/apps/cms_pico), enable us to publish our own blogs.  

Les Pas makes very good use of this integration and provides you with three choices of blog post templates in its first release, Cascade, Magazine, and Timeline.

<img alt="Blog template" src="https://repository-images.githubusercontent.com/555381925/1d4318d5-f961-4f25-8c1a-e76fffc1d1ea" width="400" />

**Cascade** is the simplest one, presenting your album in a two-column list of photos. It's a good fit if you don't care much about annotating each one of them. On the contrary, **Magazine** is your choice when you have a lot to say. And **Timeline**, as the name says, is great for presenting your work in a time-based manner, like your kid's childhood photos, or an album documenting an event.  

To start blogging, you may begin by adding captions to your photos. Then from the new 'Manage Blog' menu, you can launch the 'Blogging Dialog' as you see above, in that dialog window, choose the blog theme you like and select which photos to include in the blog. When all are set, hit the 'Post' button. Changes you make to your photos later, like caption modification, or photo editing, will be published to the blog automatically. You only need to post the blog again if you would like to change the blog theme or photo set. P.S. Pico CMS supports HTML tags in the caption too.

Nextcloud protects your files with strong authentication. To allow the general public to view your blog, Les Pas will create a low-resolution version of your selected photos and copy them to Pico CMS's storage space. If your works are videos or animated GIF/WebP etc, there is no way to do the compression, instead, the original files are copied. Mind that, at the current stage, Pico CMS doesn't provide any way to authenticate visitors, so your works are freely downloadable by the general public.

Due to security reasons, Pico CMS team won't provide API for non-admin users to install new themes, you have to do it manually.

### Installation
1. Install [Pico CMS](https://apps.nextcloud.com/apps/cms_pico)
2. Login to your Nextcloud instance, you need the `root` privilege
    - Download the `pico_lespas` folder from this repo
    - Copy folder `pico_lespas` to `/<your Nextcloud data folder>/appdata_xxxxxxxxx/cms_pico/themes`. Don't change the name **`pico_lespas`**, or things will break. The folder content of `.../cms_pico/themes/pico_lespas/` should look like the following afterward
      ```
      css/
      fonts/
      images/
      index.twig
      js/
      sass/
      single.twig
      ```
    - Change the ownership of the created folder and all the files beneath it to `www-data.www-data` by `chown -R www-data.www-data /<your Nextcloud data folder>/appdata_xxxxxxxxx/cms_pico/themes/pico_lespas/`
3. Visit your Nexcloud page in the browser, log in as Nextcloud admin, go to Pico CMS setting, and be aware that there are two Pico CMS items in the setting screen, make sure you select the one in 'Administration' section
4. Scroll to Custom themes section, you will see `pico_lespas` in the theme list now, if not, hit the refresh button. Click the '+' button to add `pico_lespas` theme
5. **Done!** You can now go back to Les Pas app and start blogging.
6. You should go through all the instructions on Pico's console page too, there are some other configurations you might like to take care, like the website short URL, etc. If you do follow the website's short URL instructions and you are using Apache, please make sure you enable `proxy` and `proxy_http` modules too, or web server will throw `500` error.
7. As Les Pas stores all pico-related files in a hidden folder in Les Pas's home folder, if you are using Apache as your web server, make sure file access to hidden folders is allowed. Refer to this [issue](https://github.com/scubajeff/pico_lespas/issues/5) for detailed instructions.
