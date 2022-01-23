import React, { useState, useContext } from "react";
import { Form, Modal, Input } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { storage } from "../../firebase/config";
import { ref, uploadBytes } from "firebase/storage";
// import { AuthContext } from "../../Context/AuthProvider";

export default function StorageFileModal() {
  const { isStorageFileVisible, setIsStorageFileVisible } =
    useContext(AppContext);

  //   const {
  //     user: { uid },
  //   } = useContext(AuthContext);

  const [image, setImage] = useState(null);

  const [form] = Form.useForm();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadForm = () => {
    const storageRef = ref(storage, "img/" + image.name);
    uploadBytes(storageRef, image).then();

    setIsStorageFileVisible(false);
  };

  const handleCancel = () => {
    setIsStorageFileVisible(false);
  };

  return (
    <div>
      <Modal
        title="Upload file"
        visible={isStorageFileVisible}
        onOk={uploadForm}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form form={form} layout="vertical">
          <Input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </Form>
      </Modal>
    </div>
  );
}
