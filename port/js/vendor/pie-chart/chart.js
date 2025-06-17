 
       $(document).on('ready', function() {
            $('#demo-pie-1').pieChart({
                barColor: '#ee163b',
                trackColor: '#f6f6f6',
                lineCap: 'round',
                lineWidth: 8,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-2').pieChart({
                barColor: '#ee163b',
                trackColor: '#f6f6f6',
                lineCap: 'butt',
                lineWidth: 8,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-3').pieChart({
                barColor: '#ee163b',
                trackColor: '#f6f6f6',
                lineCap: 'square',
                lineWidth: 8,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });

            $('#demo-pie-4').pieChart({
                barColor: '#ee163b',
                trackColor: '#f6f6f6',
                lineCap: 'round',
                lineWidth: 8,
                rotate: 90,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
			
			$('#demo-pie-5').pieChart({
                barColor: '#ee163b',
                trackColor: '#f6f6f6',
                lineCap: 'round',
                lineWidth: 8,
                rotate: 90,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
			
			$('#demo-pie-6').pieChart({
                barColor: '#ee163b',
                trackColor: '#f6f6f6',
                lineCap: 'round',
                lineWidth: 8,
                rotate: 90,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '%');
                }
            });
        });
