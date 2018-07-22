$(document).ready(function() {
                          
					if(navigator.onLine){
                          
                          $(".complete").hide();
						$(".loader").delay(10000).hide(function(){
							$(this).fadeOut("slow");
							$(".complete").show();
							$(this).hide();
						});
								//getting data for splash from congif.xml
								

					} 
					else {
						//directing towards noconnection page while ofline
							window.location.href = "noconnection.html";

						}
					});


