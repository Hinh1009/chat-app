import React from "react";
import { Button, Collapse, Typography } from "antd";
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";
// import useFireStore from "../../hooks/useFireStore";
// import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export default function RoomList() {
  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    React.useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <div>
      <Collapse ghost defaultActiveKey={["1"]}>
        <PanelStyled header="Your chat and channel" key="1">
          {rooms.map((room) => (
            <LinkStyled
              key={room.id}
              onClick={() => setSelectedRoomId(room.id)}
            >
              {room.name}
            </LinkStyled>
          ))}
          <Button
            className="add-room"
            type="text"
            icon={<PlusSquareOutlined />}
            onClick={handleAddRoom}
          >
            Add new channel
          </Button>
        </PanelStyled>
      </Collapse>
    </div>
  );
}
