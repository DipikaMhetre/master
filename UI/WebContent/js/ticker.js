
			
			function GetClock(){
				var d=new Date();
				var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear(),nhour=d.getHours(),nmin=d.getMinutes(),ap;
				     if(nhour==0){ap=" AM";nhour=12;}
				else if(nhour<12){ap=" AM";}
				else if(nhour==12){ap=" PM";}
				else if(nhour>12){ap=" PM";nhour-=12;}

				if(nyear<1000) nyear+=1900;
				if(nmin<=9) nmin="0"+nmin;
				
				$('#clockbox').html(ndate+"/"+(nmonth+1)+"/"+nyear+" "+nhour+":"+nmin+ap+""
				);
				//document.getElementById('clockbox').innerHTML=" "+ndate+"/"+(nmonth+1)+"/"+nyear+" "+nhour+":"+nmin+ap+"";
				

				window.onload=function(){
				GetClock();
				setInterval(GetClock,1000);
				}
			}	