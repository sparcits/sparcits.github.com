const data = {
	'2015': {
		img: 'images/2023.jpg',
		projects: [
			{
				logo: './images/vw-grp-china.png',
				detailPage: '/Stories/vw-china',
				title: 'FARIS',
				desc: 'FARIS (BW on HANA) – SAP Support'
			},
			{
				logo: './images/savwipl-white.png',
				detailPage: '/Stories/vw-china',
				title: 'SAVWIPL',
				desc: 'VWIPL – S/4HANA Go-live , Technical Migration ECC6.0 to S/4HANA 1809'
			},
			{
				logo: './images/scania.png',
				detailPage: '/Stories/vw-china',
				title: 'SCANIA',
				desc: 'NBF for SCANIA (Order to Deliver) S/4HANA'
			}
		]
	},
	'2019': {
		img: 'images/2023.jpg',
		projects: [
			{
				logo: './images/vw-grp-china.png',
				detailPage: '/Stories/vw-china',
				title: 'VCIC',
				desc: 'SAP S/4 Conversion'
			},
			{
				logo: './images/traton-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'TRATON',
				desc: 'SAP S/4HANA on Cloud for TRATON SE – kick off'
			},
			{
				logo: './images/vw-grp-china.png',
				detailPage: '/Stories/vw-china',
				title: 'MTX',
				desc: 'SAP S/4 Conversion Project – MTX (Component Factories of China)'
			}
		]
	},
	'2021': {
		img: 'images/2023.jpg',
		projects: [
			{
				logo: './images/vw-grp-china.png',
				detailPage: '/Stories/vw-china',
				title: 'PTC',
				desc: 'Completed SAP S/4HANA Project'
			},
			{
				logo: './images/audi-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'AUDI PPE',
				desc: 'SAP S/4HANA Implementation Project'
			},
			{
				logo: './images/vw-grp-china.png',
				detailPage: '/Stories/vw-china',
				title: 'CSO',
				desc: 'Completed SAP S/4HANA Project'
			},
			{
				logo: './images/savwipl-white.png',
				detailPage: '/Stories/vw-china',
				title: 'SAVWIPL',
				desc: 'OneSAP Go-live'
			}
		]
	},
	'2022': {
		img: 'images/2022.jpg',
		projects: [
			{
				logo: './images/anhui-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'ANHUI',
				desc: 'Phase 2 & 3'
			},
			{
				logo: './images/vw-grp-china.png',
				detailPage: '/Stories/vw-china',
				title: 'MTX',
				desc: 'Completion of S/4 Conversion project'
			},
			{
				logo: './images/volkswagen-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'AIMS',
				desc: 'S/4HANA Implementation kick-off'
			},
			{
				logo: './images/scania.png',
				detailPage: '/Stories/vw-china',
				title: 'SCANIA',
				desc: 'S/4HANA Migration in SCM system'
			},
			{
				logo: './images/volkswagen-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'VGME',
				desc: 'S/4HANA Implementation Kick-off'
			}
		]
	},
	'2023': {
		img: 'images/2023.jpg',
		projects: [
			{
				logo: './images/traton-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'TRATON',
				desc: 'S/4HANA Implementation Go-live'
			},
			{
				logo: './images/volkswagen-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'VWGME',
				desc: 'S/4HANA Implementation Go-live'
			},
			{
				logo: './images/anhui-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'ANHUI',
				desc: 'SOP Go-live'
			}
		]
	},
	'2024': {
		img: 'images/2023.jpg',
		projects: [
			{
				logo: './images/powerco.png',
				detailPage: '/Stories/vw-china',
				title: 'POWERCO',
				desc: 'Implementation & AMS Support started'
			},
			{
				logo: './images/vwfs-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'VWFS',
				desc: 'S/4HANA AMS Started'
			},
			{
				logo: './images/bentley-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'Bentley',
				desc: 'MES DMC project'
			},
			{
				logo: './images/man.png',
				detailPage: '/Stories/vw-china',
				title: 'MAN',
				desc: 'Brownfield PoC'
			},
			{
				logo: './images/vwfs-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'VWFS',
				desc: 'AMS & Rollout for Taiwan'
			},
			{
				logo: './images/traton-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'TRATON SE',
				desc: 'FI Greenfield'
			}
		]
	},
	'2025': {
		img: 'images/2023.jpg',
		projects: [
			{
				logo: './images/man.png',
				detailPage: '/Stories/vw-china',
				title: 'MAN',
				desc: 'S/4HANA Conversion'
			},
			{
				logo: './images/scout-logo.png',
				detailPage: '/Stories/vw-china',
				title: 'SCOUT',
				desc: 'S/4HANA Implementation'
			}
		]
	}
};

function showYear(year) {
	document.querySelectorAll('.journeyList button').forEach(btn => btn.classList.remove('active'));
	event.target.classList.add('active');

	const yearData = data[year];
	document.getElementById('year-img').src = yearData.img;

	const projectList = document.getElementById('project-list');
	projectList.innerHTML = '';

	yearData.projects.forEach(project => {
		const col = document.createElement('div');
		col.className = 'col';

		col.innerHTML = `
			<div class="project-card">
				<div class="project-header">
				<img src="${project.logo}" alt="Project Logo" class="project-logo" width="200">
				<div class="project-icons">
					<a href="${project.detailPage}" class="external-icon" title="Visit Project">
					<i class="bi bi-box-arrow-up-right"></i>
					</a>
				</div>
				</div>
				<div class="project-title">${project.title}</div>
				<div class="project-desc">${project.desc}</div>
				<div class="tech-tags">SAP · Brownfield · Docker</div>
			</div>
    	`;
		projectList.appendChild(col);
	})

	/* yearData.projects.forEach(proj => {
		const col = document.createElement('div');
		col.className = 'col';

		const card = document.createElement('div');
		card.className = 'project-card';
		card.innerHTML = `<h5>${proj.title}</h5><p>${proj.desc}</p>`;
		projectList.appendChild(card);
	}); */
}