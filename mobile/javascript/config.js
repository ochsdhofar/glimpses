	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#FFFFFF";bookConfig.iconColor="#FFFFFF";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#FFFFFF";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#93c5ec";bookConfig.bgEndColor="#f6eb74";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.png";bookConfig.backgroundPosition="fill";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#3088c7";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#FFFFFF";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="20";bookConfig.rightMargin="20";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#885049";bookConfig.totalPageCount=64;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.CreatedTime ="200107215407";bookConfig.bookTitle="ochsdhofar";bookConfig.bookmarkCR="d7d01a0219949e2b48190303a8214c8f716dc1c6";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I\'m going to buy below product\(s\)\:      $\{shopping\}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoDynamicTurnPhoto","annoId":"202072150149234","alpha":"1","location":{"tannoName":"slider1","x":"0.05711597903507593","y":"0.1377852213472069","width":"0.904868297271872","height":"0.5349273658078847","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.image.TAnnoDynamicTurnPhoto","addBack":"false","addBorder":"false","backgroundColor":"16711680","backgroundColorAlpha":"1","backgroundBorderColor":"16711680","backgroundBorderColorAlpha":"1","Images":[{"value":"./files/pageConfig/IMG-20191017-WA0003.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0003.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0010.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0010.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0012.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0012.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0016.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0016.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0023.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0023.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0024.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0024.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0031.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0031.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0040.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0040.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0046.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0046.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0056.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0056.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0057.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0057.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0059.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0059.jpg"},{"value":"./files/pageConfig/IMG-20191017-WA0065.jpg","originalURL":"./files/pageConfig/IMG-20191017-WA0065.jpg"}]}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoEmbeddedSlideshow","annoId":"202072150146203","alpha":"1","location":{"tannoName":"slider2","x":"0.20158580835909154","y":"0.3777215550725154","width":"0.7441876091923129","height":"0.3792063096128948","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.image.TAnnoEmbeddedSlideshow","isRepeat":"true","frameStyle":"round","ImageSizeStyle":"original size","duration":"5","autoBool":"true","selectBtn":"false","Images":[{"value":"./files/pageConfig/IMG-20191212-WA0004\(2\).jpg","originalURL":"./files/pageConfig/IMG-20191212-WA0004\(2\).jpg"},{"value":"./files/pageConfig/IMG-20191212-WA0005\(1\).jpg","originalURL":"./files/pageConfig/IMG-20191212-WA0005\(1\).jpg"},{"value":"./files/pageConfig/IMG-20191212-WA0006\(3\).jpg","originalURL":"./files/pageConfig/IMG-20191212-WA0006\(3\).jpg"},{"value":"./files/pageConfig/IMG-20191212-WA0007\(2\).jpg","originalURL":"./files/pageConfig/IMG-20191212-WA0007\(2\).jpg"},{"value":"./files/pageConfig/IMG-20191212-WA0007\(3\).jpg","originalURL":"./files/pageConfig/IMG-20191212-WA0007\(3\).jpg"},{"value":"./files/pageConfig/IMG-20191212-WA0009\(3\).jpg","originalURL":"./files/pageConfig/IMG-20191212-WA0009\(3\).jpg"}]}],[],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoBanner","annoId":"202072150149494","alpha":"1","location":{"tannoName":"slider3","x":"0.15622900147829594","y":"0.3005143189727874","width":"0.6706927832280608","height":"0.3264678283386191","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.image.TAnnoBanner","autoBool":"true","selectBtn":"false","banners":[{"imageUrl":"./files/pageConfig/IMG-20191118-WA0008.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0008.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0011.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0011.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0012.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0012.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0014.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0014.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0015.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0015.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0024.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0024.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0025.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0025.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0028.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0028.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0029.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0029.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0037.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0037.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0041.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0041.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0050.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0050.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0051.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0051.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0056.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0056.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0058.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0058.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"},{"imageUrl":"./files/pageConfig/IMG-20191118-WA0061.jpg","originalURL":"./files/pageConfig/IMG-20191118-WA0061.jpg","title":"","linkUrl":"","linkTarget":"_blank","displayTime":"3"}]}],[],[{"annotype":"com.mobiano.flipbook.pageeditor\:\:TAnnoPlugIn","annoId":"202072150141751","alpha":"1","location":{"tannoName":"slider4","x":"-0.09575325897056848","y":"0.6140944779009134","width":"0.6020696142991533","height":"0.30799748185629955","rotation":"-6.48091391839742","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"AbPIRotationPhotoFor3D","className":"AbPIRotationPhotoFor3D","componentData":{"photoWidth":"358.4","photoHeight":"259.3","backColor":"16711680","backAlpha":"1","borderWidth":"3","borderColor":"16711680","borderAlpha":"1","addBack":"false","addBorder":"false","Images":[{"value":"./files/pageConfig/sumaya-page-002 - Copy.jpg","originalURL":"./files/pageConfig/sumaya-page-002 - Copy.jpg"},{"value":"./files/pageConfig/sumaya-page-007.jpg","originalURL":"./files/pageConfig/sumaya-page-007.jpg"},{"value":"./files/pageConfig/sumaya-page-011.jpg","originalURL":"./files/pageConfig/sumaya-page-011.jpg"},{"value":"./files/pageConfig/sumaya-page-005 - Copy.jpg","originalURL":"./files/pageConfig/sumaya-page-005 - Copy.jpg"},{"value":"./files/pageConfig/sumaya-page-001 - Copy.jpg","originalURL":"./files/pageConfig/sumaya-page-001 - Copy.jpg"},{"value":"./files/pageConfig/sumaya-page-008.jpg","originalURL":"./files/pageConfig/sumaya-page-008.jpg"},{"value":"./files/pageConfig/sumaya-page-012.jpg","originalURL":"./files/pageConfig/sumaya-page-012.jpg"},{"value":"./files/pageConfig/sumaya-page-006 - Copy.jpg","originalURL":"./files/pageConfig/sumaya-page-006 - Copy.jpg"},{"value":"./files/pageConfig/sumaya-page-009.jpg","originalURL":"./files/pageConfig/sumaya-page-009.jpg"},{"value":"./files/pageConfig/sumaya-page-013.jpg","originalURL":"./files/pageConfig/sumaya-page-013.jpg"},{"value":"./files/pageConfig/sumaya-page-010.jpg","originalURL":"./files/pageConfig/sumaya-page-010.jpg"}]}}],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150146176","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.308669","y":"0.387577","width":"0.036718","height":"-0.020831000000000002","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http\://et.al","linkTarget":"Blank"}}],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150147221","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.55138","y":"0.847399","width":"0.32971100000000003","height":"-0.022432999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http\://edu.in/blog/benefits-sports-stu-","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150149934","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.552433","y":"0.767578","width":"0.175329","height":"-0.022432999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http\://math-armt.org/?p","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150149056","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.627197","y":"0.927219","width":"0.22693900000000003","height":"-0.022432999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https\://www.quora.com/","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150142526","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.134759","y":"0.8964720000000002","width":"0.315841","height":"-0.022432999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http\://schoolreview.com/blog/10-rea-","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150145420","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.133943","y":"0.776741","width":"0.282529","height":"-0.022432999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http\://forbes.com/sites/leighstein-","linkTarget":"Blank"}}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150142815","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.397592","y":"0.84286","width":"0.49240600000000007","height":"-0.019228","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"Https\://Www.researchgate.net/Publication/278823414.","linkTarget":"Blank"}}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoCarouselViewer","annoId":"202072150144322","alpha":"1","location":{"tannoName":"slider5","x":"0.21460489181561612","y":"0.4264215039969592","width":"0.6383550598037898","height":"0.22687049376996996","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.image.TAnnoCarouselViewer","autoBool":"true","selectBtn":"false","duration":"5","Images":[{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0015.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0015.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0016.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0016.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0038.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0038.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0039.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0039.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0040.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0040.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0041.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0041.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0042.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0042.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0045.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0045.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0049.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0049.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0050.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0050.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0054.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0054.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0055.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0055.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0056.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0056.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0057.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0057.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0058.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0058.jpg"},{"imageName":"","url":"./files/pageConfig/IMG-20191210-WA0060.jpg","originalURL":"./files/pageConfig/IMG-20191210-WA0060.jpg"}]}],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202072150142080","alpha":"1","moviePlayTriggerEvt":"EVT_PageViewed","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.060475742507727456","y":"0.5178823836843293","width":"0.8634592124714421","height":"0.4359239330553873","rotation":"-4.844855910515633","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"ofyySNrr1Ss","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202072150142810","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.33889","y":"0.954336","width":"0.4137","height":"-0.026362","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.28","pageHeight":"841.89"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto\:salalah.nursing.institute@gmail.com","linkTarget":"Blank"}}]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}