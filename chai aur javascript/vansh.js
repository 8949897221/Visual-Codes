(function (_0x58cfbc, _0x45e525) {
    const _0x4b02b9 = _0x2441,
      _0x12e7b5 = _0x58cfbc();
    while (true) {
      try {
        const _0x4c7eab =
          -parseInt(_0x4b02b9(142)) / 1 +
          parseInt(_0x4b02b9(117)) / 2 +
          parseInt(_0x4b02b9(123)) / 3 +
          -parseInt(_0x4b02b9(160)) / 4 +
          (-parseInt(_0x4b02b9(116)) / 5) * (parseInt(_0x4b02b9(139)) / 6) +
          parseInt(_0x4b02b9(129)) / 7 +
          -parseInt(_0x4b02b9(152)) / 8;
        if (_0x4c7eab === _0x45e525) {
          break;
        } else {
          _0x12e7b5.push(_0x12e7b5.shift());
        }
      } catch (_0x2f8234) {
        _0x12e7b5.push(_0x12e7b5.shift());
      }
    }
  })(_0x5153, 422439);
  var encryptedData = null,
    decrypted = null;
  
  function _0x5153() {
    const _0x120d65 = [
      "textContent",
      "126555XpoGgA",
      "Utf8",
      atob("MjAyNC0xMi0yN1QyMzowMDowMA=="),
      "parse",
      "includes",
      "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js",
      "execCommand",
      "altKey",
      "questions",
      "readystatechange",
      "4134096EgLnCf",
      "keydown",
      "body",
      "getItem",
      "edit",
      "message",
      "user_id",
      "AES",
      "2201036mrIQpw",
      "createElement",
      "responseURL",
      "forEach",
      "accord_event",
      "moveCursorTo",
      "programming_question",
      "select",
      "querySelector",
      "solution",
      "solutiondata",
      "enc",
      "#programme-compile",
      "k3QL95NjdP!cA34CsXL",
      "concat",
      "toString",
      "-ttAnswerEditor1",
      "match",
      "getElementById",
      "https://api.examly.io/api/9DECJfxqhu0cgJAQ",
      "key",
      "removeChild",
      "decrypt",
      "school_id",
      "#content-left > content-left > div > div.t-h-full > testtaking-question > div > div.t-flex.t-items-center.t-justify-between.t-whitespace-nowrap.t-px-10.t-py-8.lg\\:t-py-8.lg\\:t-px-20.t-bg-primary\\/\\[0\\.1\\].t-border-b.t-border-solid.t-border-b-neutral-2.t-min-h-\\[30px\\].lg\\:t-min-h-\\[35px\\].ng-star-inserted > div:nth-child(1) > div > div",
      "https://api.examly.io/api/sEKMRyOJKjIzZbUa",
      "join",
      "test_details",
      "Error setting value for question ",
      "value",
      "responseText",
      "onload",
      "243245HbLxss",
      "1106308jHFLXU",
      "args",
      "push",
      "appendChild",
      ".ace_editor",
      " > label > span.checkmark1",
      "1572849dWJUKa",
      "textarea",
      "split",
      "click",
      "roll_no",
      "#tt-option-",
      "4110589DQvgUV",
      "string",
      "data",
      "list",
      "mcq_questions",
      "src",
      atob("MTIzMTc4Mzc="),
      "script",
      "addEventListener",
      "readyState",
      "6lAHfOZ",
      "copy",
    ];
    _0x5153 = function () {
      return _0x120d65;
    };
    return _0x5153();
  }
  let mcqArray = [],
    codingArray = [];
  (function () {
    const _0x500b65 = _0x2441,
      _0x3c2eef = new Date(_0x500b65(144)),
      _0x47399e = new Date();
    if (_0x47399e < _0x3c2eef) {
      (function () {
        const _0x49a907 = window.XMLHttpRequest;
        function _0x302fdc() {
          const _0x46d51a = _0x2441,
            _0x33ffbd = new _0x49a907();
          return (
            _0x33ffbd[_0x46d51a(137)](
              _0x46d51a(151),
              function () {
                const _0x215a7e = _0x46d51a;
                if (_0x33ffbd[_0x215a7e(138)] === 4) {
                  const _0xa1e2c2 = _0x33ffbd[_0x215a7e(162)];
                  (_0xa1e2c2[_0x215a7e(146)](_0x215a7e(185)) ||
                    _0xa1e2c2.includes(_0x215a7e(179))) &&
                    (encryptedData = _0x33ffbd[_0x215a7e(114)]);
                }
              },
              false
            ),
            _0x33ffbd
          );
        }
        window.XMLHttpRequest = _0x302fdc;
      })();
    } else {
    }
  })();
  function decryptData(_0x8b6361, _0xffd2b8) {
    const _0x1d6f9d = _0x2441,
      _0x500e78 = CryptoJS[_0x1d6f9d(159)][_0x1d6f9d(182)](_0x8b6361, _0xffd2b8),
      _0x3106d5 = _0x500e78[_0x1d6f9d(175)](
        CryptoJS[_0x1d6f9d(171)][_0x1d6f9d(143)]
      );
    try {
      const _0x21fe62 = JSON[_0x1d6f9d(145)](_0x3106d5);
      return _0x21fe62;
    } catch (_0x29e77d) {
      return _0x3106d5;
    }
  }
  function proceedWithDecryption() {
    const _0x4b3554 = _0x2441;
    let _0x1a6bdc = localStorage.getItem(_0x4b3554(164)),
      _0x2e31a8 = localStorage[_0x4b3554(155)]("school_details");
    if (_0x1a6bdc) {
      _0x1a6bdc = JSON[_0x4b3554(145)](_0x1a6bdc);
      if (_0x1a6bdc[_0x4b3554(132)] && _0x1a6bdc.list.test_details[0]) {
        const _0x2cd6c6 =
          _0x1a6bdc[_0x4b3554(132)][_0x4b3554(187)][0][_0x4b3554(158)];
        _0x2e31a8 = JSON[_0x4b3554(145)](_0x2e31a8);
        const _0x3730b0 = _0x2e31a8[_0x4b3554(183)],
          _0x2e6be3 = _0x4b3554(173),
          _0x12d1ef = _0x2cd6c6[_0x4b3554(174)](
            _0x3730b0[_0x4b3554(175)](),
            _0x2e6be3
          )
            [_0x4b3554(125)]("-")
            [_0x4b3554(186)]("");
        try {
          const _0x1d9e7d = JSON[_0x4b3554(145)](encryptedData);
          decrypted = decryptData(_0x1d9e7d[_0x4b3554(131)], _0x12d1ef);
          let _0x5448bc = decrypted.frozen_test_data;
          _0x5448bc[_0x4b3554(163)]((_0x344714, _0x862463) => {
            const _0x157c74 = _0x4b3554;
            _0x344714[_0x157c74(150)].forEach((_0x472c31, _0x5f1321) => {
              const _0x517802 = _0x157c74;
              if (_0x472c31[_0x517802(133)]) {
                let _0x173843 =
                    _0x472c31.mcq_questions.actual_answer[_0x517802(118)][0],
                  _0x3520a7 = _0x472c31.options,
                  _0x279a6b = -1;
                _0x3520a7[_0x517802(163)]((_0x59cd91, _0x543111) => {
                  _0x59cd91.text === _0x173843 && (_0x279a6b = _0x543111);
                });
                if (_0x279a6b !== -1) {
                  mcqArray.push(_0x279a6b);
                } else {
                }
              }
              if (_0x472c31[_0x517802(166)]) {
                let _0x12a18b =
                  _0x472c31[_0x517802(166)][_0x517802(169)][0][_0x517802(170)][0][
                    _0x517802(169)
                  ];
                codingArray[_0x517802(119)](_0x12a18b);
              }
            });
          });
        } catch (_0x2dce68) {}
      } else {
      }
    } else {
    }
  }
  function checkEncryptedData() {
    const _0x2c2f1d = _0x2441;
    if (encryptedData !== null) {
      clearInterval(dataCheckInterval);
      const _0x490575 = document[_0x2c2f1d(161)](_0x2c2f1d(136));
      _0x490575[_0x2c2f1d(134)] = _0x2c2f1d(147);
      _0x490575[_0x2c2f1d(115)] = function () {
        proceedWithDecryption();
      };
      document.head[_0x2c2f1d(120)](_0x490575);
    }
  }
  var dataCheckInterval = setInterval(checkEncryptedData, 100);
  function _0x2441(_0x4a21ce, _0x2747d0) {
    const _0x515372 = _0x5153();
    _0x2441 = function (_0x244131, _0x29191c) {
      _0x244131 = _0x244131 - 112;
      let _0x268667 = _0x515372[_0x244131];
      return _0x268667;
    };
    return _0x2441(_0x4a21ce, _0x2747d0);
  }
  (function () {
    const _0x3749eb = _0x2441;
    let _0x549dbd = JSON.parse(localStorage.getItem("formData"))?.[
      _0x3749eb(127)
    ];
    if (_0x549dbd !== _0x3749eb(135)) {
      return;
    }
  
    let typingPaused = false;
    let typingTimeout = null;
    let index = 0;
    let generatedCode = '';
    let editor = null;
    let activeIndex = 0; 
  
    function randomSpeed() {
      return Math.floor(Math.random() * 270) + 30;
    }
  
    function typeCode(editor, code) {
      index = activeIndex;
      typingPaused = false;
  
      function typeCharacter() {
        if (index < code.length && !typingPaused) {
          editor.session.insert(
            editor.getCursorPosition(), 
            code.charAt(index)
          );
          activeIndex = index;
          index++;
          
          typingTimeout = setTimeout(typeCharacter, randomSpeed());
        }
      }
      typeCharacter();
    }
    
    function toggleTypingPause() {
      typingPaused = !typingPaused;
      
      if (typingPaused) {
        activeIndex++;
       }

      if (!typingPaused && index < generatedCode.length) {
        if (editor) {
              typeCode(editor, generatedCode);
        }
      } else {
        clearTimeout(typingTimeout);
      }
    }
  
  function removeCommentLines(generatedCode) {
      const lines = generatedCode.split('\n');
      const filteredLines = lines.filter(line => !line.trim().startsWith('//'));
      return filteredLines.join('\n');
  }
  
  
  document[_0x3749eb(137)](_0x3749eb(153), function (_0x5b74e6) {
      const _0x24f2c8 = _0x3749eb;
  
  
      if ((_0x5b74e6.ctrlKey || _0x5b74e6.metaKey) && _0x5b74e6.key.toLowerCase() === '^') {
          navigator.clipboard.readText().then(clipText => {
              generatedCode = clipText;
  
             
              generatedCode = removeCommentLines(generatedCode);
            
            const editors = document.querySelectorAll('.ace_editor');
       activeIndex=0;
           if (editors.length > 2) {
               editor = ace.edit(editors[1]);
            typeCode(editor, generatedCode);
          }  else if (editors.length > 0) {
                   editor = ace.edit(editors[0]);
          typeCode(editor, generatedCode);
          }
          }).catch(err => {});
      }
        
      if ((_0x5b74e6.ctrlKey || _0x5b74e6.metaKey) && _0x5b74e6.key.toLowerCase() === 'e') {
          _0x5b74e6.preventDefault();
          toggleTypingPause();
      }
  
  
      if (_0x5b74e6[_0x24f2c8(149)] && _0x5b74e6[_0x24f2c8(180)] === "&") {
        const _0x3fcfa1 = document[_0x24f2c8(168)](_0x24f2c8(172));
        if (_0x3fcfa1) {
          const _0x5130db = document[_0x24f2c8(168)](_0x24f2c8(184));
          if (_0x5130db) {
            const _0xa27242 = _0x5130db[_0x24f2c8(141)],
              _0x29ede5 = _0xa27242[_0x24f2c8(177)](/Question No : (\d+) \/ \d+/);
            let _0x51a8e0 = null;
            _0x29ede5 && (_0x51a8e0 = _0x29ede5[1]);
            let _0x4e084c = codingArray[_0x51a8e0 - 1];
            _0x28998d(_0x4e084c);
            if (_0x51a8e0) {
              const _0x2af886 = document[_0x24f2c8(168)](_0x24f2c8(121));
              if (_0x2af886) {
                const _0x14195c = ace[_0x24f2c8(156)](_0x2af886);
                try {
                  let _0x216fbd = codingArray[_0x51a8e0 - 1];
                  typeof _0x216fbd !== _0x24f2c8(130) &&
                    (_0x216fbd = String(_0x216fbd));
                  _0x28998d(_0x216fbd);
                  _0x14195c.setValue(_0x216fbd);
                  _0x14195c[_0x24f2c8(165)](0, 0);
                } catch (_0x4a0e97) {
                  console.error(
                    _0x24f2c8(112) + (_0x51a8e0 - 1) + ":",
                    _0x4a0e97[_0x24f2c8(157)]
                  );
                }
              }
            }
          }
        } else {
          const _0x472b50 = document.querySelector(_0x24f2c8(184));
          if (_0x472b50) {
            const _0x2b337d = _0x472b50.textContent,
              _0x5bb2bb = _0x2b337d.match(/Question No : (\d+) \/ \d+/);
            let _0x40e8f8 = null;
            _0x5bb2bb && (_0x40e8f8 = _0x5bb2bb[1]);
            const _0x3a5c10 = mcqArray[_0x40e8f8 - 1],
              _0x40adc6 = document.querySelector(
                _0x24f2c8(128) + _0x3a5c10 + _0x24f2c8(122)
              );
            _0x40adc6 && _0x40adc6[_0x24f2c8(126)]();
          }
        }
      }
    });
    
    function _0x28998d(_0x4cf79b) {
      const _0x3f3d97 = _0x3749eb,
        _0x2b2d6c = document[_0x3f3d97(161)](_0x3f3d97(124));
      _0x2b2d6c[_0x3f3d97(113)] = _0x4cf79b;
      document[_0x3f3d97(154)][_0x3f3d97(120)](_0x2b2d6c);
      _0x2b2d6c[_0x3f3d97(167)]();
      document[_0x3f3d97(148)](_0x3f3d97(140));
  
      navigator.clipboard.readText()
      .then(copiedText => {
        generatedCode = copiedText;
      })
      .catch(err => {
        generatedCode = _0x4cf79b;
      });
  
      document[_0x3f3d97(154)][_0x3f3d97(181)](_0x2b2d6c);
    }
  })();
  (function () {
    const _0x11c25e = _0x2441;
    let _0x1437a3 = JSON.parse(localStorage[_0x11c25e(155)]("formData"))?.[
      _0x11c25e(127)
    ];
    if (_0x1437a3 !== _0x11c25e(135)) {
      return;
    }
    document[_0x11c25e(137)](_0x11c25e(153), function (_0x4a4d45) {
      const _0x18ab38 = _0x11c25e;
      if (_0x4a4d45[_0x18ab38(149)] && _0x4a4d45[_0x18ab38(180)] === "%") {
        const _0x4f649e = document.querySelector(_0x18ab38(172));
        if (_0x4f649e) {
          const _0x49e6c4 = document[_0x18ab38(168)](_0x18ab38(184));
          if (_0x49e6c4) {
            const _0x3bb6d3 = _0x49e6c4[_0x18ab38(141)],
              _0x821d57 = _0x3bb6d3.match(/Question No : (\d+) \/ \d+/);
            let _0x55f163 = null;
            _0x821d57 && (_0x55f163 = _0x821d57[1]);
            let _0x4ceb71 = codingArray[_0x55f163 - 1];
            _0x50bc85(_0x4ceb71);
            if (_0x55f163) {
              const _0x128105 = document[_0x18ab38(178)](
                "tt-answer-1" + _0x55f163 - 1 + _0x18ab38(176)
              );
              if (_0x128105) {
                const _0x57b5eb = ace.edit(_0x128105);
                try {
                  let _0x7832c4 = codingArray[_0x55f163 - 1];
                  typeof _0x7832c4 !== "string" &&
                    (_0x7832c4 = String(_0x7832c4));
                  _0x50bc85(_0x7832c4);
                  _0x57b5eb.setValue(_0x7832c4);
                  _0x57b5eb.moveCursorTo(0, 0);
                } catch (_0x3a57f3) {
                  console.error(
                    _0x18ab38(112) + _0x55f163 - 1 + ":",
                    _0x3a57f3[_0x18ab38(157)]
                  );
                }
              }
            }
          }
        } else {
          const _0x30e0f3 = document[_0x18ab38(168)](_0x18ab38(184));
          if (_0x30e0f3) {
            const _0x45c8b4 = _0x30e0f3[_0x18ab38(141)],
              _0x3ac469 = _0x45c8b4.match(/Question No : (\d+) \/ \d+/);
            let _0xcffb1a = null;
            _0x3ac469 && (_0xcffb1a = _0x3ac469[1]);
            const _0x158ff2 = mcqArray[_0xcffb1a - 1],
              _0x2ba800 = document[_0x18ab38(168)](
                _0x18ab38(128) + _0x158ff2 + _0x18ab38(122)
              );
            _0x2ba800 && _0x2ba800[_0x18ab38(126)]();
          }
        }
      }
    });
    function _0x50bc85(_0x45c0f1) {
      const _0x53bef8 = _0x11c25e,
        _0x188eb4 = document[_0x53bef8(161)]("textarea");
      _0x188eb4[_0x53bef8(113)] = _0x45c0f1;
      document[_0x53bef8(154)].appendChild(_0x188eb4);
      _0x188eb4[_0x53bef8(167)]();
      document[_0x53bef8(148)](_0x53bef8(140));
      document.body[_0x53bef8(181)](_0x188eb4);
    }
   
  })();
  var allowCopyAndPaste = function (e) {
    e.stopImmediatePropagation();
    return true;
  };
  document.addEventListener("copy", allowCopyAndPaste, true);
  document.addEventListener("paste", allowCopyAndPaste, true);
  document.addEventListener("onpaste", allowCopyAndPaste, true);