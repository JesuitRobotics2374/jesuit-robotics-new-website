"use client";

import { deleteUser, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import SettingsContainer from "./SettingsContainer";
import { IoLogOut } from "react-icons/io5";
import { MdAccountCircle, MdDelete } from "react-icons/md";
import Link from "next/link";
import UserProfile from "@/app/components/account/UserProfile";
import { auth } from "@/app/libraries/firebase";
import AlertDialog from "@/app/components/ui/AlertDialog";
import { useState } from "react";

export default function Account() {
  const [user, userLoading] = useAuthState(auth);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [alertDialogContent, setAlertDialogContent] = useState({
    title: "",
    descrition: "",
    action: () => {},
    buttons: {
      cancel: "",
      continue: "",
    },
  });

  const router = useRouter();

  function deleteCurrentUser() {
    deleteUser(user)
      .then(() => {
        console.log(
          "Account with the email of " +
            user.email +
            " was successfully deleted.",
        );
      })
      .catch((error) => {
        throw new Error("Error while deleting account: " + error);
      });
  }

  function signOutCurrentUser() {
    signOut(auth)
      .then(() => {
        console.log(
          "Account with the email of " +
            user.email +
            " was successfully signed out.",
        );
        router.replace("/");
      })
      .catch((error) => {
        throw new Error("Error while signing out account: " + error);
      });
  }

  function updateCurrentUser() {
    updateProfile(auth.currentUser, {
      displayName: "Cuboost",
    })
      .then(() => {
        console.log(
          "Profile Updated: new name is " +
            user.displayName +
            " and new email is " +
            user.email,
        );
      })
      .catch((error) => {
        throw new Error("Error while updating current user info: " + error);
      });
  }

  const settingsLinks = [
    {
      id: 1,
      title: "Sign Out",
      descrition: "Sign out of your account...",
      icon: <IoLogOut />,
      onClickFunction: () => {
        setAlertDialogContent({
          title: "Sign Out",
          description:
            "This will sign you out from this device. You can always sign back in from the home page.",
          action: signOutCurrentUser,
          buttons: {
            cancel: "Cancel",
            continue: "Sign Out",
          },
        });
        setShowAlertDialog(true);
      },
    },
    {
      id: 2,
      title: "Update Account",
      descrition: "Update your account's info...",
      icon: <MdAccountCircle />,
      onClickFunction: () => {
        setAlertDialogContent({
          title: "Delete Account",
          description:
            "This action cannot be undone. This will permanently delete your account and remove all of your data.",
          action: signOutCurrentUser,
          buttons: {
            cancel: "Cancel",
            continue: "Delete Account",
          },
        });
        setShowAlertDialog(true);
      },
    },
    {
      id: 3,
      title: "Delete Account",
      descrition: "Permanently delete your account...",
      icon: <MdDelete />,
      onClickFunction: () => {
        setAlertDialogContent({
          title: "Delete Account",
          description:
            "This action cannot be undone. This will permanently delete your account and remove all of your data.",
          action: deleteCurrentUser,
          buttons: {
            cancel: "Cancel",
            continue: "Delete",
          },
        });
        setShowAlertDialog(true);
      },
    },
  ];

  if (userLoading) if (!userLoading && !user) router.push("/sign-up");
  if (user)
    return (
      <div>
        <div className="main-green-bg mx-auto mb-10 w-5/6 max-w-xl rounded-3xl px-6 py-7 backdrop-blur-2xl">
          <UserProfile />

          <p className="pt-6">
            You are sign in{" "}
            {!userLoading && user.displayName ? (
              <span>
                as{" "}
                <span className="text-green-700 dark:text-green-300">
                  {user.displayName}
                </span>
              </span>
            ) : (
              ""
            )}{" "}
            with the email{" "}
            <span className="text-green-700 dark:text-green-300">
              {user.email}
            </span>
            .
          </p>
        </div>

        {settingsLinks.map((link) => (
          <SettingsContainer
            title={link.title}
            descrition={link.descrition}
            icon={link.icon}
            key={link.id}
            onClickFunction={link.onClickFunction}
          />
        ))}

        {showAlertDialog && (
          <AlertDialog
            alertDialogContent={alertDialogContent}
            setShowAlertDialog={setShowAlertDialog}
          />
        )}
      </div>
    );
}
