"use client";
import useCategories from "@/hooks/useCategory";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import TextField from "@/ui/TextField";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "./useCreatePost";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostForm() {
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const { createPost, isCreating } = useCreatePost();
  const router = useRouter();
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log({ data });
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    createPost(formData, {
      onSuccess: () => {
        console.log(formData);

        router.push("/profile/posts ");
      },
    });
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      // onSubmit={handleSubmit(onSubmit)}
    >
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="متن کوتاه"
        name="briefText"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="متن"
        name="text"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="اسلاگ"
        name="slug"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        isRequired
        errors={errors}
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        errors={errors}
        register={register}
        isRequired
        options={categories}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: " کاور پست الزامی است." }}
        render={({ field: { value, onChange, ...rest } }) => {
          return (
            <FileInput
              label="انتخاب کاور پست"
              name="coverImage"
              isRequired
              errors={errors}
              {...rest}
              value={value?.fileNmae}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-image"
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null);
              setValue("cover-image", null);
            }}
            variant="red"
            className="w-6 h-6 absolute left-4 top-4 "
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      <div>
        {isCreating ? (
          <SpinnerMini />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}
export default CreatePostForm;
