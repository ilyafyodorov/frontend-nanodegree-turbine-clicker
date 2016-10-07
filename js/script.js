var names=[];
var counters=[];
var pictures=[];

names.push('Turbine1');
names.push('Turbine2');
names.push('Turbine3');
names.push('Turbine4');
names.push('Turbine5');

counters.push(0);
counters.push(0);
counters.push(0);
counters.push(0);
counters.push(0);

pictures.push('http://i.kinja-img.com/gawker-media/image/upload/xga2es0kjiiwsroruscn.jpg');
pictures.push('https://upload.wikimedia.org/wikipedia/commons/7/79/Dampfturbine_Montage01.jpg');
pictures.push('http://www.energy.siemens.com/hq/pool/hq/power-generation/gas-turbines/sgt-750/SIM00010_458.jpg');
pictures.push('https://powergen.gepower.com/content/dam/gepower-pgdp/global/en_US/images/service/upgrades/E-class%20gas%20turbine.jpg');
pictures.push('http://4.bp.blogspot.com/-v2QePS45WZk/VYV1d7b0LMI/AAAAAAAAAAk/N8kBt5tYdN8/s1600/gas-turbine-gt24-gt26-ev-burner.jpg');


for (var i=0; i<counters.length; i++) {
    $('body').append('<p id="my-name'+i.toString()+'">'+names[i]+'</p>');
};
for (var i=0; i<counters.length; i++) {
    $('body').append('<img id="my-elem'+i.toString()+'" src="'+pictures[i]+'" alt="Turbine" height="100">'+'<p id="counter'+i.toString()+'"></p>');
    $('#my-elem'+i.toString()).css('display','none');
    $('#counter'+i.toString()).html(counters[i].toString());
    $('#counter'+i.toString()).css('display','none');
};

for (var i=0; i<counters.length; i++) {

  var name = 'my-name'+i.toString();
  var elem = document.getElementById(name); 

  elem.addEventListener('click', (function(iCopy,countersLength) {
    return function() {
        for(var j=0; j<countersLength; j++) {
            if (j==iCopy) {
                $('#my-elem'+j.toString()).css('display','block');
                $('#counter'+j.toString()).css('display','block');
            }
            else {
                $('#my-elem'+j.toString()).css('display','none');
                $('#counter'+j.toString()).css('display','none');
            }
        };       
    };
  })(i,counters.length));

};


for (var i=0; i<counters.length; i++) {

  var name = 'my-elem'+i.toString();
  var elem = document.getElementById(name); 

  elem.addEventListener('click', (function(iCopy) {
    return function() {
        counters[iCopy]+=1;
        $("#counter"+iCopy.toString()).html(counters[iCopy].toString());
    };
  })(i));

};