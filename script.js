var topStoriesString = "In 2007 and 2008 Jafta served as an acting justice of the Constitutional Court, and in 2009 he was permanently appointed (together with Sisi Khampepe, Mogoeng Mogoeng and Johan Froneman) by President Jacob Zuma. He is considered a key member, with Ray Zondo, of the Court's conservative wing.Some of Jafta's judgments have proved controversial. For example, his judgment in Walele, delivered during his acting stint, has been described by a leading advocate as awful and inexplicable. He is one of the most prolific judges on the Court, with a very high dissent rate, including on points not raised by the parties or his colleagues. His main judgments have sometimes received no support from his colleagues. Jafta's dissent in Rivonia, which received the support of only his staunch ally Ray Zondo and was criticised by commentators, sought to racialise a seemingly innocuous issue and said certain of the Court's previous judgments were not binding. However, his unanimous judgment in Bakgatla-ba-Kgafela, which upheld an appeal by a rural community embroiled. in a dispute with its controversial traditional leader, was described as a crucial judgment on land rights and land reform and received lavish praise from commentators.";
var topStoriesStringCut = topStoriesString.split(".", 30);

var topStoriesList = document.getElementById("top-stories-list")

for (i = 0; i < 9; i++) {
	var listItem = document.createElement("li");
	topStoriesList.appendChild(listItem);

	var listSpan = document.createElement("span");
	listItem.appendChild(listSpan);
	listSpan.className = "top-stories-list-span mouseover";
	listSpan.innerHTML = topStoriesStringCut[i]
};
