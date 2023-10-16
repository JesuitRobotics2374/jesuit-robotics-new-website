"use client";

import { db } from "@/app/libraries/firebase";
import * as Form from "@radix-ui/react-form";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewDoc() {
  const router = useRouter();
  async function createNewDoc(data) {
    console.log("Doc created:");
    console.log(data);
    const userRef = collection(db, "/docs");
    await addDoc(
      userRef,
      {
        title: data.title,
        descrition: data.description,
        contents: data.contents,
      },
      { merge: true },
    );
    router.push("/member/docs");
  }

  return (
    <div>
      <h1>Create New Doc</h1>
      <Form.Root
        className=" mx-20 mt-6"
        onSubmit={(event) => {
          // prevent default form submission
          event.preventDefault();
          const data = Object.fromEntries(new FormData(event.currentTarget));

          createNewDoc(data);
        }}
      >
        <Form.Field className="form-field" name="title">
          <div>
            <Form.Label className="form-label">Title</Form.Label>
            <Form.Message className="form-message" match="valueMissing">
              Please enter a title
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input type="text" maxLength="25" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="form-field" name="description">
          <div>
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Message className="form-message" match="valueMissing">
              Please enter a description
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea type="text" required />
          </Form.Control>
        </Form.Field>

        <Form.Field className="form-field" name="contents">
          <div>
            <Form.Label className="form-label">Contents</Form.Label>
            <Form.Message className="form-message" match="valueMissing">
              Please enter the contents
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea type="text" rows="20" required />
          </Form.Control>
        </Form.Field>

        <div className="flex w-full justify-between">
          <button className="button-outline" onClick={() => router.back()}>
            Cancel
          </button>
          <Form.Submit asChild>
            <button className="button-fill">Create</button>
          </Form.Submit>
        </div>
      </Form.Root>
    </div>
  );
}
