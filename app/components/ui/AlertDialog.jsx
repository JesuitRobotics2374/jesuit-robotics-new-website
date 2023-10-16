import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

export default function AlertDialog({
  alertDialogContent,
  setShowAlertDialog,
}) {
  return (
    <AlertDialogPrimitive.Root defaultOpen onOpenChange={setShowAlertDialog}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-green-950/30" />
        <AlertDialogPrimitive.Content className="data-[state=open]:animate-contentShow light-green-bg fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-3xl p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialogPrimitive.Title asChild>
            <h4 className="pb-3">{alertDialogContent.title}</h4>
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description asChild>
            <p className="pb-4">{alertDialogContent.description}</p>
          </AlertDialogPrimitive.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialogPrimitive.Cancel asChild>
              <button className="button-outline">
                {alertDialogContent.buttons.cancel}
              </button>
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              <button
                className="button-fill"
                onClick={alertDialogContent.action}
              >
                {alertDialogContent.buttons.continue}
              </button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
