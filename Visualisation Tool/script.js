// script.js
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const linksDiv = document.getElementById('links');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');
    const svg = document.querySelector('.connections');

    const links = {
        home: [{ text: "This webpage contains literature pertaining to Ethics in AI identified during the systematic review of Jan Lawrence Formosa's undergraduate FYP in Artificial Intelligence ", url: 'https://github.com/M1HAJA/ICT3909-Resources'}],
        circle1: [
            { text: '1. How to Evaluate Trust in AI‐Assisted Decision Making? A Survey of Empirical Methodologies', url: 'https://dl.acm.org/doi/abs/10.1145/3476068' },
            { text: '2. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '3. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '4. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '5. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '6. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '7. Ethical and legal challenges of informed consent applying artificial intelligence in medical diagnostic consultations ', url: 'https://link.springer.com/article/10.1007/s00146-020-01008-9' },
            { text: '8. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
            { text: '9. Ethical use of Artificial Intelligence in Health Professions Education: AMEE Guide No. 158 ', url: 'https://example.com/1-1' },
            { text: '10. Teasing out Artificial Intelligence in Medicine: An Ethical Critique of Artificial Intelligence and Machine Learning in Medicine', url: 'https://link.springer.com/article/10.1007/s11673-020-10080-1' }
        ],
        circle2: [
            { text: '1. How to Evaluate Trust in AI‐Assisted Decision Making? A Survey of Empirical Methodologies', url: 'https://dl.acm.org/doi/abs/10.1145/3476068' },
            { text: '2. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '3. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '4. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '5. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '6. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '10. Chatbot for Health Care and Oncology Applications Using Artificial Intelligence and Machine Learning: Systematic Review', url: 'https://cancer.jmir.org/2021/4/e27850/' },
            { text: '12. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
            { text: '13. Ethical use of Artificial Intelligence in Health Professions Education: AMEE Guide No. 158 ', url: 'https://example.com/1-1' },
        ],
        circle3: [
            { text: '1. How to Evaluate Trust in AI‐Assisted Decision Making? A Survey of Empirical Methodologies', url: 'https://dl.acm.org/doi/abs/10.1145/3476068' },
            { text: '2. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '3. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '4. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '5. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '6. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '7. Artificial intelligence and the value of transparency ', url: 'https://link.springer.com/article/10.1007/s00146-020-01066-z' },
            { text: '8. Ethical and legal challenges of informed consent applying artificial intelligence in medical diagnostic consultations ', url: 'https://link.springer.com/article/10.1007/s00146-020-01008-9' },
            { text: '9. Chatbot for Health Care and Oncology Applications Using Artificial Intelligence and Machine Learning: Systematic Review', url: 'https://cancer.jmir.org/2021/4/e27850/' },
            { text: '10. Artificial intelligence for good health: a scoping review of the ethics literature', url: 'https://link.springer.com/article/10.1186/s12910-021-00577-8' },
            { text: '11. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
            { text: '12. Ethical use of Artificial Intelligence in Health Professions Education: AMEE Guide No. 158 ', url: 'https://example.com/1-1' },
            { text: '13. Teasing out Artificial Intelligence in Medicine: An Ethical Critique of Artificial Intelligence and Machine Learning in Medicine', url: 'https://link.springer.com/article/10.1007/s11673-020-10080-1' }
        ],
        circle4: [
            { text: '1. How to Evaluate Trust in AI‐Assisted Decision Making? A Survey of Empirical Methodologies', url: 'https://dl.acm.org/doi/abs/10.1145/3476068' },
            { text: '2. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '3. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '4. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '5. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '6. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '7. Artificial intelligence and the value of transparency ', url: 'https://link.springer.com/article/10.1007/s00146-020-01066-z' },
            { text: '8. Beyond bias and discrimination: redefining the AI ethics principle of fairness in healthcare machine‐learning algorithms', url: 'https://link.springer.com/article/10.1007/s00146-022-01455-6' },
            { text: '9. Ethical and legal challenges of informed consent applying artificial intelligence in medical diagnostic consultations ', url: 'https://link.springer.com/article/10.1007/s00146-020-01008-9' },
            { text: '10. Chatbot for Health Care and Oncology Applications Using Artificial Intelligence and Machine Learning: Systematic Review', url: 'https://cancer.jmir.org/2021/4/e27850/' },
            { text: '11. Artificial intelligence for good health: a scoping review of the ethics literature', url: 'https://link.springer.com/article/10.1186/s12910-021-00577-8' },
            { text: '12. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
            { text: '13. Ethical use of Artificial Intelligence in Health Professions Education: AMEE Guide No. 158 ', url: 'https://example.com/1-1' },
            { text: '14. Teasing out Artificial Intelligence in Medicine: An Ethical Critique of Artificial Intelligence and Machine Learning in Medicine', url: 'https://link.springer.com/article/10.1007/s11673-020-10080-1' }
        ],
        circle5: [
            { text: '1. How to Evaluate Trust in AI‐Assisted Decision Making? A Survey of Empirical Methodologies', url: 'https://dl.acm.org/doi/abs/10.1145/3476068' },
            { text: '2. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '3. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '4. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '5. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '6. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '7. Artificial intelligence and the value of transparency ', url: 'https://link.springer.com/article/10.1007/s00146-020-01066-z' },
            { text: '8. Beyond bias and discrimination: redefining the AI ethics principle of fairness in healthcare machine‐learning algorithms', url: 'https://link.springer.com/article/10.1007/s00146-022-01455-6' },
            { text: '9. Ethical and legal challenges of informed consent applying artificial intelligence in medical diagnostic consultations ', url: 'https://link.springer.com/article/10.1007/s00146-020-01008-9' },
            { text: '10. Chatbot for Health Care and Oncology Applications Using Artificial Intelligence and Machine Learning: Systematic Review', url: 'https://cancer.jmir.org/2021/4/e27850/' },
            { text: '11. Artificial intelligence for good health: a scoping review of the ethics literature', url: 'https://link.springer.com/article/10.1186/s12910-021-00577-8' },
            { text: '12. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
            { text: '13. Ethical use of Artificial Intelligence in Health Professions Education: AMEE Guide No. 158 ', url: 'https://example.com/1-1' },
            { text: '14. Teasing out Artificial Intelligence in Medicine: An Ethical Critique of Artificial Intelligence and Machine Learning in Medicine', url: 'https://link.springer.com/article/10.1007/s11673-020-10080-1' }
        ],
        circle6: [
            { text: '1. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '2. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '3. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '4. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '5. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '6. Beyond bias and discrimination: redefining the AI ethics principle of fairness in healthcare machine‐learning algorithms', url: 'https://link.springer.com/article/10.1007/s00146-022-01455-6' },
            { text: '7. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
        ],
        circle7: [
            { text: '1. How to Evaluate Trust in AI‐Assisted Decision Making? A Survey of Empirical Methodologies', url: 'https://dl.acm.org/doi/abs/10.1145/3476068' },
            { text: '2. A Survey of Ambient Intelligence', url: 'https://dl.acm.org/doi/abs/10.1145/3447242' },
            { text: '3. The Chinese approach to artificial intelligence: an analysis of policy, ethics, and regulation', url: 'https://link.springer.com/chapter/10.1007/978-3-030-81907-1_5' },
            { text: '4. Operationalising AI ethics: barriers, enablers and next steps', url: 'https://link.springer.com/article/10.1007/s00146-021-01308-8' },
            { text: '5. Organisational responses to the ethical issues of artificial intelligence', url: 'https://link.springer.com/article/10.1007/s00146-021-01148-6' },
            { text: '6. AI, big data, and the future of consent', url: 'https://link.springer.com/article/10.1007/s00146-021-01262-5' },
            { text: '7. Artificial intelligence and the value of transparency ', url: 'https://link.springer.com/article/10.1007/s00146-020-01066-z' },
            { text: '8. Beyond bias and discrimination: redefining the AI ethics principle of fairness in healthcare machine‐learning algorithms', url: 'https://link.springer.com/article/10.1007/s00146-022-01455-6' },
            { text: '9. Ethical and legal challenges of informed consent applying artificial intelligence in medical diagnostic consultations ', url: 'https://link.springer.com/article/10.1007/s00146-020-01008-9' },
            { text: '10. Chatbot for Health Care and Oncology Applications Using Artificial Intelligence and Machine Learning: Systematic Review', url: 'https://cancer.jmir.org/2021/4/e27850/' },
            { text: '11. Artificial intelligence for good health: a scoping review of the ethics literature', url: 'https://link.springer.com/article/10.1186/s12910-021-00577-8' },
            { text: '12. SHIFTing artificial intelligence to be responsible in healthcare: A systematic review ', url: 'https://www.sciencedirect.com/science/article/pii/S0277953622000855' },
            { text: '13. Ethical use of Artificial Intelligence in Health Professions Education: AMEE Guide No. 158 ', url: 'https://example.com/1-1' },
            { text: '14. Teasing out Artificial Intelligence in Medicine: An Ethical Critique of Artificial Intelligence and Machine Learning in Medicine', url: 'https://link.springer.com/article/10.1007/s11673-020-10080-1' }
        ]
    };

    const centerX = 400;
    const centerY = 400;

    circles.forEach((circle, index) => {
        if (circle.id !== 'home') {
            const circleRect = circle.getBoundingClientRect();
            const svgRect = svg.getBoundingClientRect();
            const circleX = circleRect.left + circleRect.width / 2 - svgRect.left;
            const circleY = circleRect.top + circleRect.height / 2 - svgRect.top;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', centerX);
            line.setAttribute('y1', centerY);
            line.setAttribute('x2', circleX);
            line.setAttribute('y2', circleY);
            line.setAttribute('stroke', '#000000');  // Set the stroke color to black
            line.setAttribute('stroke-width', '2');

            svg.appendChild(line);
        }

        circle.addEventListener('click', () => {
            const id = circle.id;
            displayLinks(id);
            popup.style.display = 'flex';
        });

        const linkCount = links[circle.id].length;
        const size = 100 + linkCount * 3.5;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    function displayLinks(id) {
        linksDiv.innerHTML = '';
        const ul = document.createElement('ul');
        links[id].forEach((link, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.text;
            a.target = '_blank';  // Open links in a new tab
            if (index % 2 === 0) {
                a.style.color = '#007BFF';  // First alternating color
            } else {
                a.style.color = '#456990';  // Second alternating color
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        linksDiv.appendChild(ul);
    }
});
