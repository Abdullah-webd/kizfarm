"use client";

import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Heading2, ImageIcon, Italic, List, Upload, Video } from "lucide-react";
import React, { useRef } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LearningRichEditor({ value, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false }),
      Youtube.configure({ width: 640, height: 360 }),
    ],
    content: value || "<p>Write course content here...</p>",
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "min-h-64 rounded-b-lg border border-t-0 border-gray-300 bg-white px-4 py-3 text-sm leading-7 outline-none prose prose-sm max-w-none",
      },
    },
  });

  if (!editor) return null;

  const insertLocalImage = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const src = String(reader.result || "");
      if (src) editor.chain().focus().setImage({ src }).run();
    };
    reader.readAsDataURL(file);
  };

  const buttonClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-slate-600 hover:bg-green-50 hover:text-green-800";

  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-t-lg border border-gray-300 bg-slate-50 p-2">
        <button
          className={buttonClass}
          type="button"
          title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </button>
        <button
          className={buttonClass}
          type="button"
          title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </button>
        <button
          className={buttonClass}
          type="button"
          title="Heading"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading2 size={16} />
        </button>
        <button
          className={buttonClass}
          type="button"
          title="Bullet list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </button>
        <button
          className={buttonClass}
          type="button"
          title="Insert image by URL"
          onClick={() => {
            const url = window.prompt("Image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
        >
          <ImageIcon size={16} />
        </button>
        <button
          className={buttonClass}
          type="button"
          title="Upload image"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload size={16} />
        </button>
        <button
          className={buttonClass}
          type="button"
          title="Embed YouTube video"
          onClick={() => {
            const src = window.prompt("YouTube URL");
            if (src) editor.commands.setYoutubeVideo({ src });
          }}
        >
          <Video size={16} />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            insertLocalImage(event.target.files?.[0]);
            event.target.value = "";
          }}
        />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
