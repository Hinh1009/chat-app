import React, { useContext } from "react";
import { Modal, Form, Input } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/services";
import { AuthContext } from "../../Context/AuthProvider";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    console.log({ FormData: form.getFieldValue() });
    //add new room
    addDocument("rooms", { ...form.getFieldValue(), members: [uid] });

    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    form.resetFields();

    setIsAddRoomVisible(false);
  };
  return (
    <div>
      <Modal
        title="Create new room"
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Room's name" name="name">
            <Input placeholder="Enter room's name" />
          </Form.Item>

          <Form.Item label="description" name="description">
            <Input.TextArea placeholder="Enter the description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
