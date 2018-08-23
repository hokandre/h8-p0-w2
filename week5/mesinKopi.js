function hitungProfit(){

}
function hitungPersedian(transaksi){

}
function buatKopi(jenisKopi){

}
function transaksi(pesanan){
    var menu = Object.keys(daftarMenu);
    for(var i=0;i<pesanan.length;i++){
        var massage='';
        //object pelanggan
        var pelanggan={
            nama : '',
            money :  pesanan[i][3],
            kembalian : 0,
            jenisKopi : pesanan[i][1]
        }

        /* data pelanggan*/
        var nama=pesanan[i][0]
        var jenisKopi=pesanan[i][1]
        var size=pesanan[i][2]
        var money=pesanan[i][3]
            
        //1. cek nama pelanggan
        if(nama===""){
            pelanggan.nama='nama tidak di isi!'
        }
        else{
            pelanggan.nama=pesanan[i][0]
            
            var isThere=false;
            var kodeKopi;
            var kodeSize;
            var kodeHarga;
            //2. cek apakah jenis kopi di jual
            for(var j=0;j<menu.length;j++){
                    if(pelanggan.jenisKopi===menu[j]){
                        isThere=true
                        kodeKopi=j
                    }
            }
            if(isThere===true){
                //3. cek size dan money
                var dataSize=daftarMenu[kodeKopi].size;
                var dataHarga=daftarMenu[kodeKopi].price;
                for(var l=0;l<dataSize.length;l++){
                    var sama=false
                    if(dataSize[l]===size){
                        isThere=true
                        sama=true
                        kodeSize=dataSize[l]
                        kodeHarga=dataHarga[l]
                        if(money>=kodeHarga){
                            pelanggan.kembalian=money-kodeHarga;
                        }
                        else{
                            isThere=false;
                            massage="Uang Tidak cukup"
                            
                        }
                        break;
                    }
                }
            }
            /*else{

            }*/
            if(isThere===true){

            }
            
            
            //4. cek money dan price

                
        
        
        }
}
var kas=100000
var transaksi =[];
var log=[];
var daftarMenu ={
    'kopi tubruk':{
        size : [mini,large,big],
        price: [5000,8000,10000]
    },
    'mocha':{
        size : [mini,large],
        price: [10000,15000]
    },
    'capucinno':{
        size : [mini,large,big],
        price: [15000,20000,25000]
    }
}
var formula={
    'kopi tubruk':{
        'mini':{
            kopibubuk : 50,
            gula : 15,
            air : 100
        },
        'large':{
            kopibubuk : 80,
            gula : 25,
            air : 150
        },
        'big':{
            kopibubuk : 100,
            gula : 35,
            air : 200
        }

    },
    'mocha': {
        'mini' :{
            kopibubuk : 50,
            gula : 15,
            air : 100,
            susu : 1
        },
        'large':{
            kopibubuk : 80,
            gula : 25,
            air : 150,
            susu : 2           
        }
    },
    'capucino':{
        'mini':{
            kopibubuk : 50,
            gula : 15,
            air : 100,
            cream : 1
        },
        'large':{
            kopibubuk : 80,
            gula : 25,
            air : 150,
            cream : 2
        },
        'big':{
            kopibubuk : 100,
            gula : 35,
            air : 200,
            cream : 3
        }   
    }
}
var persedian = {
    'cup' :{
        mini : 10,
        large : 10,
        big : 10
    },
    'kopi bubuk' :{
        berat : 100
    },
    'gula' :{
        berat:100
    },
    'susu' :{
        berat : 100
    },
    'cream':{
        berat :100
    }
}

console.log(transaksi(
    [
        ['Merry','kopi tubruk','mini',50000]
    ]

));