from flask import Flask
from practicum import find_mcu_boards, McuBoard, PeriBoard
from time import sleep
import math
soundValue = 0
devs = find_mcu_boards()
app = Flask(__name__)

if len(devs) == 0:
    print("*** No practicum board found.")
    exit(1)

mcu = McuBoard(devs[0])
print("[Yak G]")
print("Mr. Poon Shotateerawasu 6010500109")
print("Mr. Chutchawin Thaengthong 6010504686")
print("= = = = = = = = = = = = = = = = =")
print("*** Practicum board found")
print("*** Manufacturer: %s" % \
        mcu.handle.getString(mcu.device.iManufacturer, 256))
print("*** Product: %s" % \
        mcu.handle.getString(mcu.device.iProduct, 256))
peri = PeriBoard(mcu)

@app.route("/mocksound_test")
def send_test():
    return 10

@app.route("/playeri")
def playerI():
    # val = str(peri.get_sound())
    # val = str(peri.get_sound_player_i())
    val_i = str(peri.get_sound(player = 1))
    print("player 1 : ", val_i)
    return val_i

@app.route("/playerii")
def playerII():
    # val = str(peri.get_sound())
    # val = str(peri.get_sound_player_ii())
    val_ii = str(peri.get_sound(player = 2))
    print("player 2 : ", val_ii)
    return val_ii

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# while True:
#     print(peri.get_sound())
#     sleep(0.5)
# def __main__():
    
        # while True:
        #     # peri.set_led_value(count)
        #     # sw = peri.get_switch()
        #     # light = peri.get_light()
        #     sound = peri.get_sound()
        #     # if sw is True:
        #     #     state = "PRESSED"
        #     # else:
        #     #     state = "RELEASED"

        #     # print("LEDs set to %d | Switch state: %-8s | Light value: %d" % (
        #     #         count, state, light))

        #     # count = (count + 1) % 8
        #     # print("Sound value : %d " %(sound))
        #     print("Sound Value : " , abs(sound - 68))
        #     sleep(0.25)


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)


