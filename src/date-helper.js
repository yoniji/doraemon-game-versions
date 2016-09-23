/**
 * Created by yoniji on 16/8/16.
 */
export function getDate(date) {
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日\
            ${hour > 10 ? String(hour) : `0${hour}`}:${minute > 10 ? String(minute) : `0${minute}`}`;
}

export function getDuration(date) {
    const durationInMinutes =
        ((new Date()).getTime() - date.getTime()) / 1000 / 60;

    let timeStr = '';
    if (durationInMinutes < 1) {
        timeStr = '刚刚';
    } else if (durationInMinutes < 60) {
        timeStr = ` ${Math.floor(durationInMinutes)} 分钟前`;
    } else if (durationInMinutes / 60 < 24) {
        timeStr = ` ${Math.floor(durationInMinutes / 60)} 小时前`;
    } else {
        timeStr = getDate(date);
    }

    return timeStr;
}

