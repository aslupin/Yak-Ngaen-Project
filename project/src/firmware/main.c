#include <avr/io.h>
#include <avr/interrupt.h> /* for sei() */
#include <util/delay.h>    /* for _delay_ms() */
#include <avr/pgmspace.h>  /* required by usbdrv.h */

#include "peri.h"
#include "usbdrv.h"

// #define RQ_SET_LED 0
// #define RQ_SET_LED_VALUE 1
// #define RQ_GET_SWITCH 2
// #define RQ_GET_LIGHT 3
#define RQ_GET_SOUND_PLAYER_I 1
#define RQ_GET_SOUND_PLAYER_II 2

/* ------------------------------------------------------------------------- */
/* ----------------------------- USB interface ----------------------------- */
/* ------------------------------------------------------------------------- */
usbMsgLen_t usbFunctionSetup(uint8_t data[8])
{
    usbRequest_t *rq = (void *)data;

    /* declared as static so they stay valid when usbFunctionSetup returns */
    // static uint8_t switch_state;
    static uint16_t r16;
    static uint16_t rr16;
    // static uint8_t valueSound;
    if (rq->bRequest == RQ_GET_SOUND_PLAYER_I)
    {
        r16 = read_adc(PC0); // PLAYER 1
        usbMsgPtr = &r16;
        return 2;
    }

    else if (rq->bRequest == RQ_GET_SOUND_PLAYER_II)
    {
        rr16 = read_adc(PC1); // PLAYER 2
        usbMsgPtr = &rr16;
        return 2;
    }
    // else if (rq->bRequest == RQ_SET_LED)
    // {
    //     uint8_t led_state = rq->wValue.bytes[0];
    //     uint8_t led_no = rq->wIndex.bytes[0];
    //     set_led(led_no, led_state);
    //     return 0;
    // }

    // else if (rq->bRequest == RQ_GET_SWITCH)
    // {
    //     switch_state = SWITCH_PRESSED();

    //     /* point usbMsgPtr to the data to be returned to host */
    //     usbMsgPtr = &switch_state;

    //     /* return the number of bytes of data to be returned to host */
    //     return 1;
    // }
    // else if (rq->bRequest == RQ_SET_LED_VALUE)
    // {
    //     set_led_value(rq->wValue.bytes[0]);

    //     /* point usbMsgPtr to the data to be returned to host */
    //     // usbMsgPtr = &switch_state;

    //     /* return the number of bytes of data to be returned to host */
    //     return 0;
    // }
    // else if (rq->bRequest == RQ_GET_LIGHT)
    // {
    //     r16 = read_adc(PC4);

    //     /* point usbMsgPtr to the data to be returned to host */
    //     usbMsgPtr = &r16;

    //     /* return the number of bytes of data to be returned to host */
    //     return 2;
    // }

    /* default for not implemented requests: return no data back to host */
    return 0;
}

/* ------------------------------------------------------------------------- */
int main(void)
{
    init_peri();

    usbInit(); // v-usb

    /* enforce re-enumeration, do this while interrupts are disabled! */
    usbDeviceDisconnect();
    _delay_ms(300);
    usbDeviceConnect();

    /* enable global interrupts */
    sei();

    /* main event loop */
    for (;;)
    {
        usbPoll(); // Infix
    }

    return 0;
}

/* ------------------------------------------------------------------------- */
