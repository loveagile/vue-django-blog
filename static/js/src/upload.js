/**
 * Created by RaPoSpectre on 9/3/16.
 */
var url = generateUrl('api/v1/upload')
var uploader = Qiniu.uploader({
  runtimes: 'html5,flash,html4',
  browse_button: 'pf',
  uptoken_url: url,
  domain: 'http://ocwt4ikj4.bkt.clouddn.com/',
  get_new_uptoken: false,
  container: 'container',
  max_file_size: '100mb',
  flash_swf_url: 'http://cdn.staticfile.org/Plupload/2.1.1/Moxie.swf',
  max_retries: 3,
  dragdrop: true,
  drop_element: 'container',
  chunk_size: '4mb',
  auto_start: true,
  init: {
    FilesAdded: function (up, files) {
      plupload.each(files, function (file) {})
    },
    BeforeUpload: function (up, file) {},
    UploadProgress: function (up, file) {},
    FileUploaded: function (up, file, info) {
      var domain = up.getOption('domain')
      var jstr = $.parseJSON(info)
      var sourceLink = domain + jstr.key
      alert(sourceLink)
    },
    Error: function (up, err, errTip) {},
    UploadComplete: function () {},
  },
})
