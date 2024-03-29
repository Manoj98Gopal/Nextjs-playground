import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune';
import IndentTune from 'editorjs-indent-tune'


export const Editor = () => {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        header: Header,
        indentTune: IndentTune,
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        anyTuneName: {
          class:AlignmentTuneTool,
          config:{
            default: "right",
            blocks: {
              header: 'center',
              list: 'right'
            }
          },
        }
      },
      tunes: ['indentTune'],

    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <div id="editorjs"></div>;
};
