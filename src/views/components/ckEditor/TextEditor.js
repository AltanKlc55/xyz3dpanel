import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor({onChange,contentsforupdate}) {
  const editorRef = useRef(null);
  const [content, setContent] = useState(contentsforupdate);

  const handleEditorChange = (newContent, editor) => {
    setContent(newContent);
    if (typeof onChange === 'function') {
      onChange(newContent);
    }
  };


  return (
    <>
      <Editor
        apiKey='six2yo4bzxd8f2i0vym67wgolcxzgkn91hg7gcs24josbvs1'
        onInit={(evt, editor) => editorRef.current = editor}
		    onEditorChange={handleEditorChange}
		    content={content}
        initialValue={contentsforupdate !== undefined ? contentsforupdate : ""}
        init={{
          height: 500,
          menubar: 'file edit view insert format tools table',
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount','hr',
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent image| ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
		   image_uploadtab: true,
		   images_upload_url: 'http://localhost:3000/uploads/',
        }}
      />
    </>
  );
}