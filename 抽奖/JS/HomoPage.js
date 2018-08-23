

var raNum;
//注意：要将raNum设置为全局变量，容易出错

$(function() {
    var i =0;
    $('#clik').click(function() {

        i++;
        if(i>3){
            alert("您的抽奖机会已经用完！");
            return;
        }
        var ii = 3-i;
        if(ii>=0){
            $('#ii').html(ii);
        }


        raNum = Math.random()*100+1;
        if(150 < raNum && raNum <= 210){
            raNum = 234;
        }
        console.log(raNum);
        $(this).rotate({
            duration:3000,	//旋转时间
            angle:0,		//开始旋转的角度
            animateTo:raNum+360*3,	//最终结束时的角度
            callback:function(){	//返回一个A方法
                A();
            }
        });
    });
});

function A(){

    if(0 < raNum && raNum <= 30){
        alert("恭喜您抽到理财金2000元！");
        return;
    }else if(30 < raNum && raNum <= 90){
        alert("谢谢参与~再来一次吧~");
        return;
    }else if(90 < raNum && raNum <= 150){
        alert("恭喜您抽到理财金5200元！");
        return;
    }else if(150 < raNum && raNum <= 210){
        //再将概率减小到1%
        var n = Math.random()*100;
        if(n<1){
            alert("恭喜您获得100元京东E卡，将在次日以短信形式下发到您的手机上，请注意查收!");
        }else{
            raNum += 60;
        }
        return;
    }else if(210 < raNum && raNum <= 270){
        alert("谢谢参与~再来一次吧~");
        return;
    }else if(270 < raNum && raNum <= 330){
        alert("恭喜您抽到理财金1000元！");
        return;
    }else if(330 < raNum && raNum <= 360){
        alert("恭喜您抽到理财金2000元！");
        return;
    }
}

var now =new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var t = hours+":"+minutes+":"+seconds;
console.log(t);

$('#time').html(t);




