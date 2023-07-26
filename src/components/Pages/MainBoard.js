import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Table from "../charts/Table";

const data = [
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654044496000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C20371B239/2022/06/01/8f7809a5-e144-11ec-90cb-001c4289f6b7.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C20371B239",
    deviceName: "Cửa Nhà Xe",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654044506000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C20371B083/2022/06/01/8d1c62a0-e144-11ec-90cb-001c4289f6b7.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C20371B083",
    deviceName: "Nhà Xe 2",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654044531000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C21024B343/2022/06/01/9c138345-e144-11ec-96ac-001c42b5c357.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C21024B343",
    deviceName: "Thang Máy",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654045816000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C21283M316/2022/06/01/99a2e6b8-e147-11ec-a93c-001c429206f1.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C21283M316",
    deviceName: "R&D Hạ Long",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654046204000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C21024B343/2022/06/01/80edc663-e148-11ec-96ac-001c42b5c357.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C21024B343",
    deviceName: "Thang Máy",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654046350000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C20371B024/2022/06/01/d8399938-e148-11ec-90cb-001c4289f6b7.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C20371B024",
    deviceName: "R&D Hạ Long 2",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654046408000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C21283M316/2022/06/01/fa9cf1e4-e148-11ec-90cb-001c4289f6b7.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C21283M316",
    deviceName: "R&D Hạ Long",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654046435000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C21283M316/2022/06/01/0a7100c9-e149-11ec-a93c-001c429206f1.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C21283M316",
    deviceName: "R&D Hạ Long",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654048187000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C20371B024/2022/06/01/1f3cbb14-e14d-11ec-a93c-001c429206f1.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C20371B024",
    deviceName: "R&D Hạ Long 2",
  },
  {
    personName: "Trịnh Lâm Minh",
    date: "2022-06-01",
    checkinTime: 1654048191000,
    aliasID: "0a8b9d70-b306-4e42-8d6f-e709eb6b4509",
    placeID: "143",
    personID: "2134589559210508288",
    avatar:
      "https://s3.ap-northeast-1.wasabisys.com/camera.vn.hcm/face/upload/C20371B024/2022/06/01/217d77f3-e14d-11ec-a93c-001c429206f1.jpg",
    place: "HANET Hạ Long",
    title: "",
    type: 0,
    deviceID: "C20371B024",
    deviceName: "R&D Hạ Long 2",
  },
];
const MainBoard = () => {
  const [listPlaces, setListPlaces] = useState(
    data.map((data, index) => {
      return data.place;
    })
  );
  const [prob, setProb] = useState({
    place: "",
    device: "",
    type: 0,
  });

  const [listDevice, setlistDevice] = useState([]);
  const [datas, setDatas] = useState(data);

  const Type = useRef();

  // thực hiện mỗi lần click vào những properties
  useEffect(() => {
    var listNewDevices = data.filter(
      (data, index) => data.place === prob.place
    );
    if (prob.device === "") {
      setlistDevice(listNewDevices);
      setDatas(listNewDevices);
    } else {
      if (prob.type === "") {
        listNewDevices = data.filter(
          (data, index) =>
            data.place === prob.place && data.deviceName === prob.device
        );
        setDatas(listNewDevices);
        Type.current.classList.remove("invisible");
      } else {
        listNewDevices = data.filter(
          (data, index) =>
            data.place === prob.place &&
            data.deviceName === prob.device &&
            data.type == prob.type
        );
        setDatas(listNewDevices);
        Type.current.classList.remove("invisible");
      }
    }

    console.log(listNewDevices);
  }, [prob]);
  return (
    <div className="flex flex-col h-[100%] w-full bg-white text-normal mt-[20px]">
      {/* mainboard header */}
      <div className="flex justify-self-start gap-[10px] ml-[20px]">
        <form action="">
          <div className="flex gap-[10px] text-[20px]">
            <label for="cars">Choose a place:</label>
            <select
              name="Place"
              onChange={(e) => {
                setProb({ ...prob, place: e.target.value });
                console.log(prob.place);
              }}
              className="py-[5px] px-[10px]"
            >
              {listPlaces.map((place) => (
                <option value={place}>{place}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-[10px] text-[20px] ">
            <label for="cars">Choose a device:</label>
            <select
              name="Device"
              onChange={(e) => {
                setProb({ ...prob, device: e.target.value });
                console.log("device", prob);
              }}
              className="py-[5px] px-[10px]"
            >
              {listDevice.map((device) => (
                <option value={device.deviceName}>{device.deviceName}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-[10px] text-[20px] ">
            <label for="cars">Choose a device:</label>
            <select
              name="Person"
              onChange={(e) => {
                setProb({ ...prob, type: e.target.value });
                console.log("prob", prob);
              }}
              ref={Type}
              className="py-[5px] px-[10px] invisible"
            >
              <option value={0}>Employee</option>
              <option value={1}>Customer</option>
              <option value={2}>Guest</option>
            </select>
          </div>
        </form>
      </div>
      {/* table */}
      <div className="flex h-[700px] w-[100%] items-center justify-center">
        <Table
          data={datas}
          columns={["personName", "date", "checkinTime", "personID", "aliasID"]}
        />
      </div>
    </div>
  );
};

export default MainBoard;
