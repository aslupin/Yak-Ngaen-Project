# Yak Ngaen Project (อยากแง้น โปรเจค)

เกมนี้เป็นเกมที่ต้องเล่นสองคนโดย ผู้เล่นแต่ละคนจะสามารถเลือกรถสำหรับตัวเองเพื่อใช้ในการแข่งขันได้นอกจากนี้ยังสามารถเลือกด่านที่จะใช้ในการแข่งขันได้อีกด้วย โดยผู้เล่นทั้งสองต้องพูดใส่ไมค์ด้วยคำว่า "แง้น" เพื่อให้รถเคลื่อนที่คนที่พูดได้เสียงดังกว่าและต่อเนื่องกว่าจะทำให้รถเคลื่อนที่ได้เร็วมากขึ้นผู้เล่นคนใดที่รถเข้าถึงเส้นชัยก่อนจะเป็นผู้ชนะ

โปรเจคนี้เป็นส่วนหนึ่งของรายวิชาปฏิบัติการเก่ียวกับวิศวกรรมคอมพิวเตอร์ (01204223) หรือวิชา Practicum มหาวิทยาลัยเกษตรสาสตร์ บางเขน เพื่อเป็นการนำความรู้ที่เรียนในห้องมาประยุกต์ใช้เป็นชิ้นงาน

### จุดประสงค์

1. เป็นการนำความรู้ที่ได้เรียนมาจากวิชา Practicum มาประยุกต์ใช้เพื่อให้เข้าใจในเนื้อหาได้มากขึ้น
2. เพื่อให้ผู้เล่น รู้สึกผ่อนคลาย สนุกสนาน สร้างสัมพันธภาพที่ดีระหว่างผู้เล่น

[Github](https://github.com/aslupin/practicum_project) - Repository Project

## Prerequisites

- Desktop (Responsive 1440 x 900)
- ATmega328P
- objdev
- CrossPack-AVR (release by Objective Development)
- libusb
- python3.7
- jquery

## Built With

- MakeFile
- Flask

## Installation

### Clone

```bash
git clone https://github.com/aslupin/practicum_project.git
cd practicum_project
```

## Run and Build

### Frontend

```bash
cd /practicum_project/project/src/frontend
open index.html
```

### Firmware

```bash
cd /practicum_project/project/src/firmware
make flash
```

### Python - Host/Backend (Localhost)

```bash
cd /practicum_project/project/src/python
python3 myproject.py
```

### Virenv

```bash
. /practicum_project/project/virenv_project/practicum/bin/activate
```

## Project Structure

### frontend (./practicum_project/project/src/frontend)

- index.html ไฟล์หลักในการแสดงเกมบนหน้าจอ
- /js Folder รวมไฟล์ .js ที่ถูกเรียกใช้ใน index.html
- /css Folder รวมไฟล์ .css ที่ถูกเรียกใช้ใน index.html
- /img Folder รวมไฟล์ .png ที่ถูกเรียกใช้ใน index.html

### firmware (./practicum_project/project/src/firmware)

- main.c โปรเเกรมที่รันอยู่บน Board
- peri.c โปรเเกรมที่คอยช่วยอ่านข้อมูลจาก sensor
- peri.h ไฟล์ header ที่รวม function ใน peri.c เพื่อนำไปใช้อีกทีที่ main.c
- usbconfig.h ไฟล์ header ที่คอย config เกี่ยวกับ usb

### python (./practicum_project/project/src/python)

- myproject.py โปรเเกรมฝั่ง host ที่คอยคุย/รับค่าจาก board และเป็น server ในตัวผ่าน flask เพื่อรอรับ request จากฝั่ง frontend
- practicum.py โปรเเกรมที่มี function ในการคุยกับ board ผ่าน usb
- servermock.py เป็น server จำลองใช้เพื่อ test ค่าโดยไม่ต้องต่อ sensor

## Contributors

- นาย ปูรณ์ โชตธีรวสุ คณะวิศวกรรมศาสตร์ วิศวกรรมคอมพิวเตอร์ 6010500109
- นาย ชัชวิน แท่งทอง คณะวิศวกรรมศาสตร์ วิศวกรรมคอมพิวเตอร์ 6010504686
