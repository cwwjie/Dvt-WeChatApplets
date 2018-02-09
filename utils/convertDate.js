export default {
  // Date 转换 xxxx-xx-xx 字符串
  dateToFormat (myDate) {
    let yyyy = myDate.getFullYear();

    let mm = myDate.getMonth() + 1;
    let mmstring = mm < 10 ? '0' + mm : mm;

    let dd = myDate.getDate();
    let ddstring = dd < 10 ? '0' + dd : dd;

    return `${yyyy}-${mmstring}-${ddstring}`;
  },

  // 时间戳 转换 xxxx-xx-xx 字符串
  timestampToFormat (timestamp) {
    return this.dateToFormat(new Date(timestamp));
  },

  // 时间戳 转换 xx:xx 字符串
  timestampToHHmm (timestamp) {
    let time = parseInt(timestamp);

    let hour = parseInt(time / 3600 / 1000);
    time = time % 3600;
    let minute = parseInt(time / 60);

    return ([hour, minute]).map(function (n) {
      n = n.toString();
      return n[1] ? n : '0' + n;
    }).join(':');
  },

  // xxxx-xx-xx 字符串 转换 时间戳
  YYYYMMDDFormatToTimestamp (data) {
    let myDateList = data.split("-");
    return Date.parse(new Date(myDateList[0], (parseInt(myDateList[1]) - 1), myDateList[2]));
  },

  // xx:xx 字符串 转换 时间戳
  HHmmToTimestamp (data) {
    let myDateList = data.split(":");

    let hour = parseInt(myDateList[0]);
    let time = parseInt(myDateList[1]);

    return ((hour * 60 * 60 * 1000 ) + ( time * 60 * 1000 ));
  },
  
  // Date 转换 20180102 字符串
  dateToYYYYmmNumber (myDate) {
    let yyyy = myDate.getFullYear();

    let mm = myDate.getMonth() + 1;
    let mmstring = mm < 10 ? '0' + mm : mm;

    let dd = myDate.getDate();
    let ddstring = dd < 10 ? '0' + dd : dd;

    return `${yyyy}${mmstring}${ddstring}`;
  },
  
  // Date 转换 xxxx-xx-xx xx:xx:xx 字符串
  dateToYYYYmmDDhhMMss (myDate) {
    let yyyy = myDate.getFullYear();

    let mm = myDate.getMonth() + 1;
    let mmstring = mm < 10 ? '0' + mm : mm;

    let dd = myDate.getDate();
    let ddstring = dd < 10 ? '0' + dd : dd;

    let hh = myDate.getHours();
    let hhstring = hh < 10 ? '0' + hh : hh;

    let Min = myDate.getMinutes();
    let Minstring = Min < 10 ? '0' + Min : Min;

    let ss = myDate.getSeconds();
    let ssstring = ss < 10 ? '0' + ss : ss;
    
    return `${yyyy}-${mmstring}-${ddstring} ${hhstring}:${Minstring}:${ssstring}`;
  }
}