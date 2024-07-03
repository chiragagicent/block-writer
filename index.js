import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import SimpleImage from "@editorjs/simple-image";
import CodeTool from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
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
    image: SimpleImage,
    code: CodeTool,
    delimiter: Delimiter,
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
