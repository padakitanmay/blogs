import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
    const { register, handleSubmit, watch, setValue, getValue, control } =
        useForm({
            defaultValues: {
                title: "",
            },
        });
    return <div>PostForm</div>;
}

export default PostForm;
