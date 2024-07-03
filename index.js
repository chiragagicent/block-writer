import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";

const editor = new EditorJS({
  holderId: "editorjs",
  tools: {
    header: {
      class: Header,
      inlineToolbar: ["link"],
    },
    list: {
      class: List,
      inlineToolbar: ["link", "bold"],
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        youtube: true,
        coub: true,
      },
    },
  },
  image: {
    class: ImageTool,
    config: {
      /**
       * Custom uploader
       */
      uploader: {
        /**
         * Upload file to the server and return an uploaded image data
         * @param {File} file - file selected from the device or pasted by drag-n-drop
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByFile(file) {
          // your own uploading logic here
          return MyAjax.upload(file).then(() => {
            return {
              success: 1,
              file: {
                url: "",
                // any other image data you want to store, such as width, height, color, extension, etc
              },
            };
          });
        },

        /**
         * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
         * @param {string} url - pasted image URL
         * @return {Promise.<{success, file: {url}}>}
         */
        uploadByUrl(url) {
          // your ajax request for uploading
          return MyAjax.upload(file).then(() => {
            return {
              success: 1,
              file: {
                url: "",
                // any other image data you want to store, such as width, height, color, extension, etc
              },
            };
          });
        },
      },
    },
  },
});

let saveBtn = document.querySelector("button");

saveBtn.addEventListener("click", () => {
  editor
    .save()
    .then((outputData) => {
      console.log("Article data", outputData);
    })
    .catch((error) => {
      console.log("Saving failed:", error);
    });
});
