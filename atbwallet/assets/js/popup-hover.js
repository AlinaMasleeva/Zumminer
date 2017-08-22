$( function() {
	$(document).tooltip({items: 'a.mining-investors,a.cloud-mining,a.stake-mining,a.tokens,a.crypto,a.atb',
      content: function() {
            if ($(this).hasClass('mining-investors')) {
                  return '<div class="popup-body"><div class="title">Mining for Investors</div>' + 
	            '<div class="content">This is for users who have the ability to invest, and want to participate in mining activities. In this option, the user just needs to ascertain the amount and term of his/her investments, make the necessary transfers to ATB, and leave the company to handle all the mining activities, including the decision of the specific cryptocurrency which will be mined. As a part of this, a  training program is also provided, which includes information on basic concepts of cryptocurrency and mining, as well as on various plans and payback strategies.</div></div>';
            }
            if ($(this).hasClass('cloud-mining')) {
                  return '<div class="popup-body"><div class="title">Cloud mining</div>' + 
	            '<div class="content">Cloud mining description</div></div>';
            }
            if ($(this).hasClass('stake-mining')) {
                  return '<div class="popup-body"><div class="title">Proof of Stake Mining</div>' + 
	            '<div class="content">Proof of Stake Mining description</div></div>';
            }
            if ($(this).hasClass('tokens')) {
                  return '<div class="popup-body"><div class="title">Tokens and Smart contracts</div>' + 
	            '<div class="content">Tokens and Smart contracts description</div></div>';
            }
            if ($(this).hasClass('crypto')) {
                  return '<div class="popup-body"><div class="title">Mining cryptocurrency by using farms</div>' + 
	            '<div class="content">Mining cryptocurrency by using farms description</div></div>';
            }
            if ($(this).hasClass('atb')) {
                  return '<div class="popup-body"><div class="title">ATB</div>' + 
	            '<div class="content">ATB description</div></div>';
            }
            return '';
      }});
} );