# Tic Tac Toe Game

這是吳尚鴻教授課程"SS-06 React"的練習。

準確來說應該是這系列課程的assigned reading，真正的練習是Wheater Mood - 一個串接現成的天氣網站API，可以查詢當前和未來幾天天氣的網站實作，但因為他有提供一個現成的模板，而我拿不到這份source code，從頭自己手刻的話差別又會太大，所以就拿assigned reading來練習。但說是練習，其實就是跟著影片的教學做一次，熟悉一下React的基本操作。

這應該算是我第一份用React寫出來的project(雖然是跟著別人做的)，完完全全可以感受到React強大的地方。有點類似Boostrap之於CSS，其實React做得到的事情基本上用純JS也做得到，但就是快速方便超級多。

除了照著影片教學做以外，我還額外實做了一些東西。
像是原版會在一局結束之後馬上restart，我則是多加了一個button，讓使用者可以自己去操作這個功能。另外還加了簡單的計分，也因應這個多加了一個reset，比起restart，reset除了重新開始一局之外，也會同時把分數重製。這中間也是遇到不少的小bug，不過都滿好修的。

遇到比較大的困難是在顯示分數的部分，因為對React還不是很熟，所以在要顯示分數的時候還是習慣用純JS的寫法(還是我應該說用純C的寫法)，想當然就遇到一些問題。後來嘗試用React的寫法，也就是跟著影片教學裡的，用useState的hook寫法，後來就成功了。老實說雖然我現在算是會用了(?)，但如果像是面試的時候被問到相關的問題，我一定還是炸掉，總之還要多練習就是了。

另外有個，意外的收穫(?)。

因為前幾個練習都是one-page的網頁，一個index.html，一份CSS就結束，這次除了加上JS以外，最大的不同是用了React，而React是需要run在server上的，也就是說沒辦法像之前一樣直接把index.html打開就看到我的東西。在本機上需要run local host，而想要在github page上面呈現則是需要去run npm script。順帶一提，原本都是用npm，但跟著影片教學學到了另外一個package "yarn"。根據網路上的解釋，似乎是一個比npm更powerful，效能更好的package，甚至支援離線下載，有點神奇。總之就用了yarn完成這次的deploy，也順便把之前的SS系列的練習都分開成不同的repositories。