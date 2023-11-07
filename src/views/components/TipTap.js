import styles from './style.module.scss'
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState,} from 'react'
import MenuBar from './MenuBar.js'
import Image from '@tiptap/extension-image'

const Tiptap = () => {


  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        Image,
      }),
      Highlight,
      TaskList,
      TaskItem,
      CharacterCount.configure({
        limit: 10000,
      }),
    ],
  })


  return (
    <div className={styles.editor}>
      {editor && <MenuBar editor={editor} />}
      <EditorContent className={styles.editor__content} editor={editor} />
      <div className={styles.editor__footer}>
        <div className={styles.editor__name}>
          <button> PixWar Editor </button>
        </div>
      </div>
    </div>
  )
}

export default Tiptap;