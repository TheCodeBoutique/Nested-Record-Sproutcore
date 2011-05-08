Event.Proxy = SC.Object.create({
          convertData: function(data) {
               result = new Array();
               if (data.length == undefined)
               {
                    array_name = 'data.registration';
                    eval(array_name).guid = eval(array_name).id;
                    result.push(eval(array_name));
               }
               else
               {
                    for(var i=0; i<data.length; i++) {
                         array_name = 'data[i].registration';
												console.log(array_name);
                         eval(array_name).guid = eval(array_name).id;
                         result.push(eval(array_name));
                    }  
               }
							
               return result;
          } 
     }) ;

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('events');