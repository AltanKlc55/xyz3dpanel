import React, { useEffect, useRef } from "react";

function Editor({ onChange, editorLoaded, name, value }) {
  const editorRef = useRef();
  const { CKEditor, Editor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      Editor: require("ckeditor5-custom-build/build/ckeditor")
    };
  }, []);


  const editorConf = {
    toolbar: {
        items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'fontFamily',
            'fontSize',
            'highlight',
            'fontBackgroundColor',
            'fontColor',
            'underline',
            'alignment',
            'bulletedList',
            'numberedList',
            'imageInsert',
            'strikethrough',
            'superscript',
            'subscript',
            '|',
            'pageBreak',
            'outdent',
            'indent',
            'horizontalLine',
            'insertTable',
            '|',
            'imageUpload',
            'blockQuote',
            'mediaEmbed',
            '|',
            'undo',
            'redo',
            '|',
            'ckbox',
            'findAndReplace',
            '-',
            'style',
            '|',
            'textPartLanguage',
            'specialCharacters',
            'code',
            'showBlocks',
            'sourceEditing',
            'restrictedEditingException',
            'htmlEmbed',
            'codeBlock'
        ],
        shouldNotGroupWhenFull: true
    },
    language: 'tr',
    image: {
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties'
        ]
    }
};



  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={Editor}
          config={editorConf}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default Editor;