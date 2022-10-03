[Relative Frequency](https://github.com/ik-izz/Projects/new/main?readme=1#my-code-then-returned-the-relative-frequency-of-each-letter)

[English Alphabet Frequency](https://github.com/ik-izz/Projects/new/main?readme=1#the-english-alphabet-frequency-order)

[Cryptanalysis](https://github.com/ik-izz/Projects/new/main?readme=1#this-is-where-i-began-my-analysis)

# Substitution Cipher Cryptanalysis

###	My code analyzed the cipher text:
>lrvmnir bpr sumvbwvr jx bpr lmiwv yjeryrkbi jx qmbm wi bpr xjvni mkd ymibrut jx irhx wi bpr riirkvr jx ymbinlmtmipw utn qmumbr dj w ipmhh but bj rhnvwdmbr bpr yjeryrkbi jx bpr qmbm mvvjudwko bj yt wkbrusurbmbwjk lmird jk xjubt trmui jx ibndt wb wi kjb mk rmit bmiq bj rashmwk rmvp yjeryrkb mkd wbi iwokwxwvmkvr mkd ijyr ynib urymwk nkrashmwkrd bj ower m vjyshrbr rashmkmbwjk jkr cjnhd pmer bj lr fnmhwxwrd mkd wkiswurd bj invp mk rabrkb bpmb pr vjnhd urmvp bpr ibmbr jx rkhwopbrkrd ywkd vmsmlhr jx urvjokwgwko ijnkdhrii ijnkd mkd ipmsrhrii ipmsr w dj kjb drry ytirhx bpr xwkmh mnbpjuwbt lnb yt rasruwrkvr cwbp qmbm pmi hrxb kj djnlb bpmb bpr xjhhjcwko wi bpr sujsru msshwvmbwjk mkd wkbrusurbmbwjk w jxxru yt bprjuwri wk bpr pjsr bpmb bpr riirkvr jx jqwkmcmk qmumbr cwhh urymwk wkbmvb

### My code then returned the relative frequency of each letter. 
> 	a:5, b:68, c:5, d:23, e:5, f:1, g:1, h:23, i:41, j:48, k:49, l:8, m:62, n:17, o:7, p:30, q:7, r:84, s:17, t:13, u:24, v:22, w: 47, x:20, y:19, z:0
### Sorted it gives me:
>    r:84, b:68, m:62, k:49, j:48, w:47, i:41, p:30 u:24, d:23, h:23, v:22, x:20, y:19, n:17, s:17, t:13, L:8, o:7, q:7, a:5, c:5, e:5, f:1, g:1, z:0

###	The English alphabet frequency order:
![image](https://user-images.githubusercontent.com/94077710/193482628-beb2c25d-5c06-4a28-a091-8e672a0b5a85.png)

---

### This is where I began my analysis.

1.	The most frequent letter in the English alphabets is the letter "e" with 12.02% so I”m replacing the most frequent ciphertext, the letter "r" with the letter "E":

>lEvmniE bpE sumvbwvE jx bpE lmiwv yjeEyEkbi jx qmbm wi bpE xjvni mkd ymibEut jx iEhx wi bpE EiiEkvE jx ymbinlmtmipw utn qmumbE dj w ipmhh but bj EhnvwdmbE bpE yjeEyEkbi jx bpE qmbm mvvjudwko bj yt wkbEusuEbmbwjk lmiEd jk xjubt tEmui jx ibndt wb wi kjb mk Emit bmiq bj Eashmwk Emvp yjeEyEkb mkd wbi iwokwxwvmkvE mkd ijyE ynib uEymwk nkEashmwkEd bj oweE m vjyshEbE Eashmkmbwjk jkE cjnhd pmeE bj lE fnmhwxwEd mkd wkiswuEd bj invp mk EabEkb bpmb pE vjnhd uEmvp bpE ibmbE jx EkhwopbEkEd ywkd vmsmlhE jx uEvjokwgwko ijnkdhEii ijnkd mkd ipmsEhEii ipmsE w dj kjb dEEy ytiEhx bpE xwkmh mnbpjuwbt lnb yt EasEuwEkvE cwbp qmbm pmi hExb kj djnlb bpmb bpE xjhhjcwko wi bpE sujsEu msshwvmbwjk mkd wkbEusuEbmbwjk w jxxEu yt bpEjuwEi wk bpE pjsE bpmb bpE EiiEkvE jx jqwkmcmk qmumbE cwhh uEymwk wkbmvb

2.	The second most frequent letter is “t” with 9.10% so I’ll replace the second most frequent ciphertext, the letter “b” with “T”:

>levmnie tpe sumvtwve jx tpe lmiwv yjeeyekti jx qmtm wi tpe xjvni mkd ymiteut jx iehx wi tpe eiiekve jx ymtinlmtmipw utn qmumte dj w ipmhh tut tj ehnvwdmte tpe yjeeyekti jx tpe qmtm mvvjudwko tj yt wkteusuetmtwjk lmied jk xjutt temui jx itndt wt wi kjt mk emit tmiq tj eashmwk emvp yjeeyekt mkd wti iwokwxwvmkve mkd ijye ynit ueymwk nkeashmwked tj owee m vjyshete eashmkmtwjk jke cjnhd pmee tj le fnmhwxwed mkd wkiswued tj invp mk eatekt tpmt pe vjnhd uemvp tpe itmte jx ekhwopteked ywkd vmsmlhe jx uevjokwgwko ijnkdheii ijnkd mkd ipmseheii ipmse w dj kjt deey ytiehx tpe xwkmh mntpjuwtt lnt yt easeuwekve cwtp qmtm pmi hext kj djnlt tpmt tpe xjhhjcwko wi tpe sujseu msshwvmtwjk mkd wkteusuetmtwjk w jxxeu yt tpejuwei wk tpe pjse tpmt tpe eiiekve jx jqwkmcmk qmumte cwhh ueymwk wktmvt

3.	I see “tpe” multiple times so I’ll replace ciphertext “p” with “H” to give me THE:

>lEvmniE THE sumvTwvE jx THE lmiwv yjeEyEkTi jx qmTm wi THE xjvni mkd ymiTEut jx iEhx wi THE EiiEkvE jx ymTinlmtmiHw utn qmumTE dj w iHmhh Tut Tj EhnvwdmTE THE yjeEyEkTi jx THE qmTm mvvjudwko Tj yt wkTEusuETmTwjk lmiEd jk xjuTt tEmui jx iTndt wT wi kjT mk Emit Tmiq Tj Eashmwk EmvH yjeEyEkT mkd wTi iwokwxwvmkvE mkd ijyE yniT uEymwk nkEashmwkEd Tj oweE m vjyshETE EashmkmTwjk jkE cjnhd HmeE Tj lE fnmhwxwEd mkd wkiswuEd Tj invH mk EaTEkT THmT HE vjnhd uEmvH THE iTmTE jx EkhwoHTEkEd ywkd vmsmlhE jx uEvjokwgwko ijnkdhEii ijnkd mkd iHmsEhEii iHmsE w dj kjT dEEy ytiEhx THE xwkmh mnTHjuwTt lnT yt EasEuwEkvE cwTH qmTm Hmi hExT kj djnlT THmT THE xjhhjcwko wi THE sujsEu msshwvmTwjk mkd wkTEusuETmTwjk w jxxEu yt THEjuwEi wk THE HjsE THmT THE EiiEkvE jx jqwkmcmk qmumTE cwhh uEymwk wkTmvT

4.	The next most frequent letter is “a” with 8.12% so I’ll replace ciphertext “m” with “A”:

>lEvAniE THE suAvTwvE jx THE lAiwv yjeEyEkTi jx qATA wi THE xjvni Akd yAiTEut jx iEhx wi THE EiiEkvE jx yATinlAtAiHw utn qAuATE dj w iHAhh Tut Tj EhnvwdATE THE yjeEyEkTi jx THE qATA Avvjudwko Tj yt wkTEusuETATwjk lAiEd jk xjuTt tEAui jx iTndt wT wi kjT Ak EAit TAiq Tj EashAwk EAvH yjeEyEkT Akd wTi iwokwxwvAkvE Akd ijyE yniT uEyAwk nkEashAwkEd Tj oweE A vjyshETE EashAkATwjk jkE cjnhd HAeE Tj lE fnAhwxwEd Akd wkiswuEd Tj invH Ak EaTEkT THAT HE vjnhd uEAvH THE iTATE jx EkhwoHTEkEd ywkd vAsAlhE jx uEvjokwgwko ijnkdhEii ijnkd Akd iHAsEhEii iHAsE w dj kjT dEEy ytiEhx THE xwkAh AnTHjuwTt lnT yt EasEuwEkvE cwTH qATA HAi hExT kj djnlT THAT THE xjhhjcwko wi THE sujsEu AsshwvATwjk Akd wkTEusuETATwjk w jxxEu yt THEjuwEi wk THE HjsE THAT THE EiiEkvE jx jqwkAcAk qAuATE cwhh uEyAwk wkTAvT

5.	The next most frequent letter is “o” with 7.68% so I’ll replace ciphertext “k” with “O”

>lEvAniE THE suAvTwvE jx THE lAiwv yjeEyEOTi jx qATA wi THE xjvni AOd yAiTEut jx iEhx wi THE EiiEOvE jx yATinlAtAiHw utn qAuATE dj w iHAhh Tut Tj EhnvwdATE THE yjeEyEOTi jx THE qATA AvvjudwOo Tj yt wOTEusuETATwjO lAiEd jO xjuTt tEAui jx iTndt wT wi OjT AO EAit TAiq Tj EashAwO EAvH yjeEyEOT AOd wTi iwoOwxwvAOvE AOd ijyE yniT uEyAwO nOEashAwOEd Tj oweE A vjyshETE EashAOATwjO jOE cjnhd HAeE Tj lE fnAhwxwEd AOd wOiswuEd Tj invH AO EaTEOT THAT HE vjnhd uEAvH THE iTATE jx EOhwoHTEOEd ywOd vAsAlhE jx uEvjoOwgwOo ijnOdhEii ijnOd AOd iHAsEhEii iHAsE w dj OjT dEEy ytiEhx THE xwOAh AnTHjuwTt lnT yt EasEuwEOvE cwTH qATA HAi hExT Oj djnlT THAT THE xjhhjcwOo wi THE sujsEu AsshwvATwjO AOd wOTEusuETATwjO w jxxEu yt THEjuwEi wO THE HjsE THAT THE EiiEOvE jx jqwOAcAO qAuATE cwhh uEyAwO wOTAvT

6.	The next most frequent is “i” but since ciphertext “w” shows up as single words I’ll substitute “w” for “I”:

>lEvAniE THE suAvTIvE jx THE lAiIv yjeEyEOTi jx qATA Ii THE xjvni AOd yAiTEut jx iEhx Ii THE EiiEOvE jx yATinlAtAiHI utn qAuATE dj I iHAhh Tut Tj EhnvIdATE THE yjeEyEOTi jx THE qATA AvvjudIOo Tj yt IOTEusuETATIjO lAiEd jO xjuTt tEAui jx iTndt IT Ii OjT AO EAit TAiq Tj EashAIO EAvH yjeEyEOT AOd ITi iIoOIxIvAOvE AOd ijyE yniT uEyAIO nOEashAIOEd Tj oIeE A vjyshETE EashAOATIjO jOE cjnhd HAeE Tj lE fnAhIxIEd AOd IOisIuEd Tj invH AO EaTEOT THAT HE vjnhd uEAvH THE iTATE jx EOhIoHTEOEd yIOd vAsAlhE jx uEvjoOIgIOo ijnOdhEii ijnOd AOd iHAsEhEii iHAsE I dj OjT dEEy ytiEhx THE xIOAh AnTHjuITt lnT yt EasEuIEOvE cITH qATA HAi hExT Oj djnlT THAT THE xjhhjcIOo Ii THE sujsEu AsshIvATIjO AOd IOTEusuETATIjO I jxxEu yt THEjuIEi IO THE HjsE THAT THE EiiEOvE jx jqIOAcAO qAuATE cIhh uEyAIO IOTAvT

7.	I see multiple 2 letter words with the ciphertext letter “j” in it and some have a proven plaintext “t” in front of it, so it makes sense that plaintext “O” is ciphertext “j” and not ciphertext “k”:

>lEvAniE THE suAvTIvE Ox THE lAiIv yOeEyEkTi Ox qATA Ii THE xOvni Akd yAiTEut Ox iEhx Ii THE EiiEkvE Ox yATinlAtAiHI utn qAuATE dO I iHAhh Tut TO EhnvIdATE THE yOeEyEkTi Ox THE qATA AvvOudIko TO yt IkTEusuETATIOk lAiEd Ok xOuTt tEAui Ox iTndt IT Ii kOT Ak EAit TAiq TO EashAIk EAvH yOeEyEkT Akd ITi iIokIxIvAkvE Akd iOyE yniT uEyAIk nkEashAIkEd TO oIeE A vOyshETE EashAkATIOk OkE cOnhd HAeE TO lE fnAhIxIEd Akd IkisIuEd TO invH Ak EaTEkT THAT HE vOnhd uEAvH THE iTATE Ox EkhIoHTEkEd yIkd vAsAlhE Ox uEvOokIgIko iOnkdhEii iOnkd Akd iHAsEhEii iHAsE I dO kOT dEEy ytiEhx THE xIkAh AnTHOuITt lnT yt EasEuIEkvE cITH qATA HAi hExT kO dOnlT THAT THE xOhhOcIko Ii THE suOsEu AsshIvATIOk Akd IkTEusuETATIOk I OxxEu yt THEOuIEi Ik THE HOsE THAT THE EiiEkvE Ox OqIkAcAk qAuATE cIhh uEyAIk IkTAvT

8.	I see multiple "AkD" and multiple "Ak" so I’ll replace ciphertext “k” with plaintext “N”:

>lEvAniE THE suAvTIvE Ox THE lAiIv yOeEyENTi Ox qATA Ii THE xOvni ANd yAiTEut Ox iEhx Ii THE EiiENvE Ox yATinlAtAiHI utn qAuATE dO I iHAhh Tut TO EhnvIdATE THE yOeEyENTi Ox THE qATA AvvOudINo TO yt INTEusuETATION lAiEd ON xOuTt tEAui Ox iTndt IT Ii NOT AN EAit TAiq TO EashAIN EAvH yOeEyENT ANd ITi iIoNIxIvANvE ANd iOyE yniT uEyAIN nNEashAINEd TO oIeE A vOyshETE EashANATION ONE cOnhd HAeE TO lE fnAhIxIEd ANd INisIuEd TO invH AN EaTENT THAT HE vOnhd uEAvH THE iTATE Ox ENhIoHTENEd yINd vAsAlhE Ox uEvOoNIgINo iOnNdhEii iOnNd ANd iHAsEhEii iHAsE I dO NOT dEEy ytiEhx THE xINAh AnTHOuITt lnT yt EasEuIENvE cITH qATA HAi hExT NO dOnlT THAT THE xOhhOcINo Ii THE suOsEu AsshIvATION ANd INTEusuETATION I OxxEu yt THEOuIEi IN THE HOsE THAT THE EiiENvE Ox OqINAcAN qAuATE cIhh uEyAIN INTAvT

9.	The next most frequent letter is “s” so I’ll replace ciphertext “i” with “S” and I see multiple "Ii" which leads me to believe this is the right substitution:

>lEvAnSE THE suAvTIvE Ox THE lASIv yOeEyENTS Ox qATA IS THE xOvnS ANd yASTEut Ox SEhx IS THE ESSENvE Ox yATSnlAtASHI utn qAuATE dO I SHAhh Tut TO EhnvIdATE THE yOeEyENTS Ox THE qATA AvvOudINo TO yt INTEusuETATION lASEd ON xOuTt tEAuS Ox STndt IT IS NOT AN EASt TASq TO EashAIN EAvH yOeEyENT ANd ITS SIoNIxIvANvE ANd SOyE ynST uEyAIN nNEashAINEd TO oIeE A vOyshETE EashANATION ONE cOnhd HAeE TO lE fnAhIxIEd ANd INSsIuEd TO SnvH AN EaTENT THAT HE vOnhd uEAvH THE STATE Ox ENhIoHTENEd yINd vAsAlhE Ox uEvOoNIgINo SOnNdhESS SOnNd ANd SHAsEhESS SHAsE I dO NOT dEEy ytSEhx THE xINAh AnTHOuITt lnT yt EasEuIENvE cITH qATA HAS hExT NO dOnlT THAT THE xOhhOcINo IS THE suOsEu AsshIvATION ANd INTEusuETATION I OxxEu yt THEOuIES IN THE HOsE THAT THE ESSENvE Ox OqINAcAN qAuATE cIhh uEyAIN INTAvT

10.	I see the sentence "IT IS NOT AN EASt TASq" which leads me to believe that ciphertext “t” and “q” is plaintext “Y” and “K” respectively:

>lEvAnSE THE suAvTIvE Ox THE lASIv yOeEyENTS Ox KATA IS THE xOvnS ANd yASTEuY Ox SEhx IS THE ESSENvE Ox yATSnlAYASHI uYn KAuATE dO I SHAhh TuY TO EhnvIdATE THE yOeEyENTS Ox THE KATA AvvOudINo TO yY INTEusuETATION lASEd ON xOuTY YEAuS Ox STndY IT IS NOT AN EASY TASK TO EashAIN EAvH yOeEyENT ANd ITS SIoNIxIvANvE ANd SOyE ynST uEyAIN nNEashAINEd TO oIeE A vOyshETE EashANATION ONE cOnhd HAeE TO lE fnAhIxIEd ANd INSsIuEd TO SnvH AN EaTENT THAT HE vOnhd uEAvH THE STATE Ox ENhIoHTENEd yINd vAsAlhE Ox uEvOoNIgINo SOnNdhESS SOnNd ANd SHAsEhESS SHAsE I dO NOT dEEy yYSEhx THE xINAh AnTHOuITY lnT yY EasEuIENvE cITH KATA HAS hExT NO dOnlT THAT THE xOhhOcINo IS THE suOsEu AsshIvATION ANd INTEusuETATION I OxxEu yY THEOuIES IN THE HOsE THAT THE ESSENvE Ox OKINAcAN KAuATE cIhh uEyAIN INTAvT

11.	I then see the sentence “IT IS NOT AN EASY AS TASK TO EashAIN EAvH” which leads me to believe ciphertext “v” is plaintext “C”:

>lECAnSE THE suACTICE Ox THE lASIC yOeEyENTS Ox KATA IS THE xOCnS ANd yASTEuY Ox SEhx IS THE ESSENCE Ox yATSnlAYASHI uYn KAuATE dO I SHAhh TuY TO EhnCIdATE THE yOeEyENTS Ox THE KATA ACCOudINo TO yY INTEusuETATION lASEd ON xOuTY YEAuS Ox STndY IT IS NOT AN EASY TASK TO EashAIN EACH yOeEyENT ANd ITS SIoNIxICANCE ANd SOyE ynST uEyAIN nNEashAINEd TO oIeE A COyshETE EashANATION ONE cOnhd HAeE TO lE fnAhIxIEd ANd INSsIuEd TO SnCH AN EaTENT THAT HE COnhd uEACH THE STATE Ox ENhIoHTENEd yINd CAsAlhE Ox uECOoNIgINo SOnNdhESS SOnNd ANd SHAsEhESS SHAsE I dO NOT dEEy yYSEhx THE xINAh AnTHOuITY lnT yY EasEuIENCE cITH KATA HAS hExT NO dOnlT THAT THE xOhhOcINo IS THE suOsEu AsshICATION ANd INTEusuETATION I OxxEu yY THEOuIES IN THE HOsE THAT THE ESSENCE Ox OKINAcAN KAuATE cIhh uEyAIN INTACT

12.	I see multiple, “And” which leads me to believe that ciphertext “d” is plaintext “D”:

>lECAnSE THE suACTICE Ox THE lASIC yOeEyENTS Ox KATA IS THE xOCnS AND yASTEuY Ox SEhx IS THE ESSENCE Ox yATSnlAYASHI uYn KAuATE DO I SHAhh TuY TO EhnCIDATE THE yOeEyENTS Ox THE KATA ACCOuDINo TO yY INTEusuETATION lASED ON xOuTY YEAuS Ox STnDY IT IS NOT AN EASY TASK TO EashAIN EACH yOeEyENT AND ITS SIoNIxICANCE AND SOyE ynST uEyAIN nNEashAINED TO oIeE A COyshETE EashANATION ONE cOnhD HAeE TO lE fnAhIxIED AND INSsIuED TO SnCH AN EaTENT THAT HE COnhD uEACH THE STATE Ox ENhIoHTENED yIND CAsAlhE Ox uECOoNIgINo SOnNDhESS SOnND AND SHAsEhESS SHAsE I DO NOT DEEy yYSEhx THE xINAh AnTHOuITY lnT yY EasEuIENCE cITH KATA HAS hExT NO DOnlT THAT THE xOhhOcINo IS THE suOsEu AsshICATION AND INTEusuETATION I OxxEu yY THEOuIES IN THE HOsE THAT THE ESSENCE Ox OKINAcAN KAuATE cIhh uEyAIN INTACT

13.	I see the word “SOnND” which leads me to believe ciphertext “n” is plaintext “U”:

>lECAUSE THE suACTICE Ox THE lASIC yOeEyENTS Ox KATA IS THE xOCUS AND yASTEuY Ox SEhx IS THE ESSENCE Ox yATSUlAYASHI uYU KAuATE DO I SHAhh TuY TO EhUCIDATE THE yOeEyENTS Ox THE KATA ACCOuDINo TO yY INTEusuETATION lASED ON xOuTY YEAuS Ox STUDY IT IS NOT AN EASY TASK TO EashAIN EACH yOeEyENT AND ITS SIoNIxICANCE AND SOyE yUST uEyAIN UNEashAINED TO oIeE A COyshETE EashANATION ONE cOUhD HAeE TO lE fUAhIxIED AND INSsIuED TO SUCH AN EaTENT THAT HE COUhD uEACH THE STATE Ox ENhIoHTENED yIND CAsAlhE Ox uECOoNIgINo SOUNDhESS SOUND AND SHAsEhESS SHAsE I DO NOT DEEy yYSEhx THE xINAh AUTHOuITY lUT yY EasEuIENCE cITH KATA HAS hExT NO DOUlT THAT THE xOhhOcINo IS THE suOsEu AsshICATION AND INTEusuETATION I OxxEu yY THEOuIES IN THE HOsE THAT THE ESSENCE Ox OKINAcAN KAuATE cIhh uEyAIN INTACT

14.	Next, I see the first word is “lECAUSE” and I see a bunch of “Ox” leads me to believe ciphertext “l” and “x” is plaintext “B” and “F” respectively:

>BECAUSE THE suACTICE OF THE BASIC yOeEyENTS OF KATA IS THE FOCUS AND yASTEuY OF SEhF IS THE ESSENCE OF yATSUBAYASHI uYU KAuATE DO I SHAhh TuY TO EhUCIDATE THE yOeEyENTS OF THE KATA ACCOuDINo TO yY INTEusuETATION BASED ON FOuTY YEAuS OF STUDY IT IS NOT AN EASY TASK TO EashAIN EACH yOeEyENT AND ITS SIoNIFICANCE AND SOyE yUST uEyAIN UNEashAINED TO oIeE A COyshETE EashANATION ONE cOUhD HAeE TO BE fUAhIFIED AND INSsIuED TO SUCH AN EaTENT THAT HE COUhD uEACH THE STATE OF ENhIoHTENED yIND CAsABhE OF uECOoNIgINo SOUNDhESS SOUND AND SHAsEhESS SHAsE I DO NOT DEEy yYSEhF THE FINAh AUTHOuITY BUT yY EasEuIENCE cITH KATA HAS hEFT NO DOUBT THAT THE FOhhOcINo IS THE suOsEu AsshICATION AND INTEusuETATION I OFFEu yY THEOuIES IN THE HOsE THAT THE ESSENCE OF OKINAcAN KAuATE cIhh uEyAIN INTACT

15.	I see the words “SOUNDhESS SOUND” and “FINAh” which leads me to believe ciphertext “h” is plaintext “L”

>BECAUSE THE suACTICE OF THE BASIC yOeEyENTS OF KATA IS THE FOCUS AND yASTEuY OF SELF IS THE ESSENCE OF yATSUBAYASHI uYU KAuATE DO I SHALL TuY TO ELUCIDATE THE yOeEyENTS OF THE KATA ACCOuDINo TO yY INTEusuETATION BASED ON FOuTY YEAuS OF STUDY IT IS NOT AN EASY TASK TO EasLAIN EACH yOeEyENT AND ITS SIoNIFICANCE AND SOyE yUST uEyAIN UNEasLAINED TO oIeE A COysLETE EasLANATION ONE cOULD HAeE TO BE fUALIFIED AND INSsIuED TO SUCH AN EaTENT THAT HE COULD uEACH THE STATE OF ENLIoHTENED yIND CAsABLE OF uECOoNIgINo SOUNDLESS SOUND AND SHAsELESS SHAsE I DO NOT DEEy yYSELF THE FINAL AUTHOuITY BUT yY EasEuIENCE cITH KATA HAS LEFT NO DOUBT THAT THE FOLLOcINo IS THE suOsEu AssLICATION AND INTEusuETATION I OFFEu yY THEOuIES IN THE HOsE THAT THE ESSENCE OF OKINAcAN KAuATE cILL uEyAIN INTACT

16.	Next I see “I DO NOT DEEy yYSELF THE FINAL AUTHOuITY BUT yY” which leads me to believe cipher text “y” and “u” is plaintext “M” and “R” respectively:

>BECAUSE THE sRACTICE OF THE BASIC MOeEMENTS OF KATA IS THE FOCUS AND MASTERY OF SELF IS THE ESSENCE OF MATSUBAYASHI RYU KARATE DO I SHALL TRY TO ELUCIDATE THE MOeEMENTS OF THE KATA ACCORDINo TO MY INTERsRETATION BASED ON FORTY YEARS OF STUDY IT IS NOT AN EASY TASK TO EasLAIN EACH MOeEMENT AND ITS SIoNIFICANCE AND SOME MUST REMAIN UNEasLAINED TO oIeE A COMsLETE EasLANATION ONE cOULD HAeE TO BE fUALIFIED AND INSsIRED TO SUCH AN EaTENT THAT HE COULD REACH THE STATE OF ENLIoHTENED MIND CAsABLE OF RECOoNIgINo SOUNDLESS SOUND AND SHAsELESS SHAsE I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EasERIENCE cITH KATA HAS LEFT NO DOUBT THAT THE FOLLOcINo IS THE sROsER AssLICATION AND INTERsRETATION I OFFER MY THEORIES IN THE HOsE THAT THE ESSENCE OF OKINAcAN KARATE cILL REMAIN INTACT


17.	Next, I see “I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EasERIENCE cITH KATA HAS LEFT” which leads me to believe that ciphertext “a”, “s” and “c” is plaintext “X”, “P”, and “W” respectively:

>BECAUSE THE PRACTICE OF THE BASIC MOeEMENTS OF KATA IS THE FOCUS AND MASTERY OF SELF IS THE ESSENCE OF MATSUBAYASHI RYU KARATE DO I SHALL TRY TO ELUCIDATE THE MOeEMENTS OF THE KATA ACCORDINo TO MY INTERPRETATION BASED ON FORTY YEARS OF STUDY IT IS NOT AN EASY TASK TO EXPLAIN EACH MOeEMENT AND ITS SIoNIFICANCE AND SOME MUST REMAIN UNEXPLAINED TO oIeE A COMPLETE EXPLANATION ONE WOULD HAeE TO BE fUALIFIED AND INSPIRED TO SUCH AN EXTENT THAT HE COULD REACH THE STATE OF ENLIoHTENED MIND CAPABLE OF RECOoNIgINo SOUNDLESS SOUND AND SHAPELESS SHAPE I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EXPERIENCE WITH KATA HAS LEFT NO DOUBT THAT THE FOLLOWINo IS THE PROPER APPLICATION AND INTERPRETATION I OFFER MY THEORIES IN THE HOPE THAT THE ESSENCE OF OKINAWAN KARATE WILL REMAIN INTACT

18.	Next, I see “BECAUSE THE PRACTICE OF THE BASIC MOeEMENTS OF KATA” leads me to believe ciphertext “e” Is plaintext “V”:

>BECAUSE THE PRACTICE OF THE BASIC MOVEMENTS OF KATA IS THE FOCUS AND MASTERY OF SELF IS THE ESSENCE OF MATSUBAYASHI RYU KARATE DO I SHALL TRY TO ELUCIDATE THE MOVEMENTS OF THE KATA ACCORDINo TO MY INTERPRETATION BASED ON FORTY YEARS OF STUDY IT IS NOT AN EASY TASK TO EXPLAIN EACH MOVEMENT AND ITS SIoNIFICANCE AND SOME MUST REMAIN UNEXPLAINED TO oIVE A COMPLETE EXPLANATION ONE WOULD HAVE TO BE fUALIFIED AND INSPIRED TO SUCH AN EXTENT THAT HE COULD REACH THE STATE OF ENLIoHTENED MIND CAPABLE OF RECOoNIgINo SOUNDLESS SOUND AND SHAPELESS SHAPE I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EXPERIENCE WITH KATA HAS LEFT NO DOUBT THAT THE FOLLOWINo IS THE PROPER APPLICATION AND INTERPRETATION I OFFER MY THEORIES IN THE HOPE THAT THE ESSENCE OF OKINAWAN KARATE WILL REMAIN INTACT

19.	Next, I see “ACCORDINo” and “SIoNIFICANCE” which leads me to believe ciphertext “o” is plaintext “G”:

>BECAUSE THE PRACTICE OF THE BASIC MOVEMENTS OF KATA IS THE FOCUS AND MASTERY OF SELF IS THE ESSENCE OF MATSUBAYASHI RYU KARATE DO I SHALL TRY TO ELUCIDATE THE MOVEMENTS OF THE KATA ACCORDINo TO MY INTERPRETATION BASED ON FORTY YEARS OF STUDY IT IS NOT AN EASY TASK TO EXPLAIN EACH MOVEMENT AND ITS SIoNIFICANCE AND SOME MUST REMAIN UNEXPLAINED TO oIVE A COMPLETE EXPLANATION ONE WOULD HAVE TO BE fUALIFIED AND INSPIRED TO SUCH AN EXTENT THAT HE COULD REACH THE STATE OF ENLIoHTENED MIND CAPABLE OF RECOoNIgINo SOUNDLESS SOUND AND SHAPELESS SHAPE I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EXPERIENCE WITH KATA HAS LEFT NO DOUBT THAT THE FOLLOWINo IS THE PROPER APPLICATION AND INTERPRETATION I OFFER MY THEORIES IN THE HOPE THAT THE ESSENCE OF OKINAWAN KARATE WILL REMAIN INTACT

20.	Next, I see “RECOGNIgNG” and “fUALFIED” so I replace “g” and “f” with “Z” and “Q”:

>BECAUSE THE PRACTICE OF THE BASIC MOVEMENTS OF KATA IS THE FOCUS AND MASTERY OF SELF IS THE ESSENCE OF MATSUBAYASHI RYU KARATE DO I SHALL TRY TO ELUCIDATE THE MOVEMENTS OF THE KATA ACCORDING TO MY INTERPRETATION BASED ON FORTY YEARS OF STUDY IT IS NOT AN EASY TASK TO EXPLAIN EACH MOVEMENT AND ITS SIGNIFICANCE AND SOME MUST REMAIN UNEXPLAINED TO GIVE A COMPLETE EXPLANATION ONE WOULD HAVE TO BE QUALIFIED AND INSPIRED TO SUCH AN EXTENT THAT HE COULD REACH THE STATE OF ENLIGHTENED MIND CAPABLE OF RECOGNIZING SOUNDLESS SOUND AND SHAPELESS SHAPE I DO NOT DEEM MYSELF THE FINAL AUTHORITY BUT MY EXPERIENCE WITH KATA HAS LEFT NO DOUBT THAT THE FOLLOWING IS THE PROPER APPLICATION AND INTERPRETATION I OFFER MY THEORIES IN THE HOPE THAT THE ESSENCE OF OKINAWAN KARATE WILL REMAIN INTACT
