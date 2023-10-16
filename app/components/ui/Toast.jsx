"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";

export default function Toast({
  title,
  description,
  actionName,
  action,
  duration,
}) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        className="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-xl bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toastprimitive-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        duration={duration ? duration : "3000"}
      >
        {title && (
          <ToastPrimitive.Title className="text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]">
            {title}
          </ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description
            asChild
            className="text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]"
          >
            {description}
          </ToastPrimitive.Description>
        )}
        {actionName && (
          <ToastPrimitive.Action className="[grid-area:_action]" asChild>
            <button
              className="bg-green2 text-green11 shadow-green7 hover:shadow-green8 focus:shadow-green8 inline-flex h-[25px] items-center justify-center rounded px-[10px] text-xs font-medium leading-[25px] shadow-[inset_0_0_0_1px] hover:shadow-[inset_0_0_0_1px] focus:shadow-[0_0_0_2px]"
              onClick={() => {
                action;
              }}
            >
              {actionName}
            </button>
          </ToastPrimitive.Action>
        )}
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </ToastPrimitive.Provider>
  );
}
