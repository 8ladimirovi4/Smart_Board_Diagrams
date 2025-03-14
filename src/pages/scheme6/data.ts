export const base_data = [
	{
		id: "notesting",
		value: "No testing",
		x: 240,
		y: 110,
		type: "process",
		backgroundColor: "#deb7e5",
		lineColor: "#deb7e5",
	},
	{
		id: "testing",
		value: "Market testing",
		x: 240,
		y: 422,
		type: "process",
		backgroundColor: "#deb7e5",
		lineColor: "#deb7e5",
	},
	{
		id: "testing1",
		value: "Positive",
		percent: 65,
		x: 420,
		y: 320,
		type: "process",
		backgroundColor: "#b5dcfb",
		lineColor: "#b5dcfb",
	},
	{
		id: "testing0",
		value: "Negative",
		percent: 35,
		x: 420,
		y: 530,
		type: "process",
		backgroundColor: "#b5dcfb",
		lineColor: "#b5dcfb",
	},
	{
		id: "title",
		value: "Product Launch Strategy",
		x: 20,
		y: 269,
		type: "start",
	},
	{
		id: "1",
		value: "Successful launch",
		percent: 30,
		x: 600,
		y: 40,
		type: "process",
	},
	{
		id: "1_text",
		x: 780,
		y: 40,
		value: "$100000",
		type: "text",
		fontWeight: "bold",
		width: 70,
	},
	{
		id: "2",
		value: "Modest success",
		percent: 30,
		x: 600,
		y: 110,
		type: "process",
	},
	{
		id: "2_text",
		x: 780,
		y: 110,
		value: "$50000",
		type: "text",
		fontWeight: "bold",
		width: 70,
	},
	{
		id: "3",
		value: "Fail",
		percent: 30,
		group: "notesting",
		x: 600,
		y: 180,
		type: "process",
	},
	{
		id: "4",
		value: "Successful launch",
		percent: 30,
		x: 600,
		y: 250,
		type: "process",
	},
	{
		id: "4_text",
		x: 780,
		y: 250,
		value: "$150000",
		type: "text",
		fontWeight: "bold",
		width: 70,
	},
	{
		id: "5",
		value: "Modest success",
		percent: 30,
		x: 600,
		y: 320,
		type: "process",
	},
	{
		id: "5_text",
		x: 780,
		y: 320,
		value: "$75000",
		type: "text",
		fontWeight: "bold",
		width: 70,
	},
	{ id: "6", value: "Fail", percent: 30, x: 600, y: 390, type: "process" },
	{
		id: "7",
		value: "Successful launch",
		percent: 10,
		x: 600,
		y: 460,
		type: "process",
	},
	{
		id: "7_text",
		x: 780,
		y: 460,
		value: "$75000",
		type: "text",
		fontWeight: "bold",
		width: 70,
	},
	{
		id: "8",
		value: "Modest success",
		percent: 20,
		x: 600,
		y: 530,
		type: "process",
	},
	{
		id: "8_text",
		x: 780,
		y: 530,
		value: "$50000",
		type: "text",
		fontWeight: "bold",
		width: 70,
	},
	{ id: "9", value: "Fail", percent: 10, x: 600, y: 600, type: "process" },
	{
		id: "notesting_exp",
		value: "$40000",
		x: 880,
		y: 40,
		$css: "expected",
		textAlign: "left",
		backgroundColor: "transparent",
		height: 120,
	},
	{
		id: "testing1_exp",
		value: "$77500",
		x: 880,
		y: 250,
		$css: "expected",
		textAlign: "left",
		backgroundColor: "transparent",
		height: 120,
	},
	{
		id: "testing0_exp",
		value: "$50000",
		x: 880,
		y: 460,
		$css: "expected",
		textAlign: "left",
		backgroundColor: "transparent",
		height: 120,
	},
];

export const base_links = [
	{
		source: "testing",
		target: "testing1",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[360, 447], [390, 447], [390, 345], [420, 345]],
	},
	{
		source: "testing",
		target: "testing0",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[360, 447], [390, 447], [390, 555], [420, 555]],
	},
	{
		source: "title",
		target: "notesting",
		$css: "ltitle",
		from: "right",
		to: "left",
		line: [[180, 294], [210, 294], [210, 135], [240, 135]],
	},
	{
		source: "title",
		target: "testing",
		$css: "ltitle",
		from: "right",
		to: "left",
		line: [[180, 294], [210, 294], [210, 447], [240, 447]],
	},
	{
		source: "notesting",
		target: "1",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[360, 135], [570, 135], [570, 65], [600, 65]],
	},
	{ source: "1", target: "1_text", $css: "lprofit", mode: "direct" },
	{
		source: "notesting",
		target: "2",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[570, 135], [570, 135], [600, 135]],
	},
	{ source: "2", target: "2_text", $css: "lprofit", mode: "direct" },
	{
		source: "notesting",
		target: "3",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[570, 135], [570, 205], [600, 205]],
	},
	{
		source: "testing1",
		target: "4",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[540, 345], [570, 345], [570, 275], [600, 275]],
	},
	{ source: "4", target: "4_text", $css: "lprofit", mode: "direct" },
	{
		source: "testing1",
		target: "5",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[540, 345], [570, 345], [570, 345], [600, 345]],
	},
	{ source: "5", target: "5_text", $css: "lprofit", mode: "direct" },
	{
		source: "testing1",
		target: "6",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[540, 345], [570, 345], [570, 415], [600, 415]],
	},
	{
		source: "testing0",
		target: "7",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[540, 555], [570, 555], [570, 485], [600, 485]],
	},
	{ source: "7", target: "7_text", $css: "lprofit", mode: "direct" },
	{
		source: "testing0",
		target: "8",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[570, 555], [600, 555]],
	},
	{ source: "8", target: "8_text", $css: "lprofit", mode: "direct" },
	{
		source: "testing0",
		target: "9",
		$css: "lgroup",
		from: "right",
		to: "left",
		line: [[570, 555], [570, 625], [600, 625]],
	},
];

export const base_svgs = {

		laptop:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="60" height="60" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V57C0 58.6569 1.34315 60 3 60H57C58.6569 60 60 58.6569 60 57V3C60 1.34315 58.6569 0 57 0H3ZM2 3C2 2.44772 2.44772 2 3 2H57C57.5523 2 58 2.44772 58 3V57C58 57.5523 57.5523 58 57 58H3C2.44772 58 2 57.5523 2 57V3ZM12.1136 14.75V39.85H47.8864V14.75L12.1136 14.75ZM10.3636 39.85C10.3636 40.8165 11.1471 41.6 12.1136 41.6H47.8864C48.8529 41.6 49.6364 40.8165 49.6364 39.85V14.75C49.6364 13.7835 48.8529 13 47.8864 13H12.1136C11.1471 13 10.3636 13.7835 10.3636 14.75V39.85ZM6 44.9C6 45.5075 6.49248 46 7.1 46H52.9C53.5075 46 54 45.5075 54 44.9C54 44.2925 53.5075 43.8 52.9 43.8H7.1C6.49249 43.8 6 44.2925 6 44.9Z" />
			</svg>
		`,
		phone:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="60" height="60" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V57C0 58.6569 1.34315 60 3 60H57C58.6569 60 60 58.6569 60 57V3C60 1.34315 58.6569 0 57 0H3ZM2 3C2 2.44772 2.44772 2 3 2H57C57.5523 2 58 2.44772 58 3V57C58 57.5523 57.5523 58 57 58H3C2.44772 58 2 57.5523 2 57V3ZM23.8889 15.3429H37.1111C37.6121 15.3429 38.0925 15.5798 38.4468 16.0016C38.801 16.4234 39 16.9954 39 17.5919V44.5796C39 45.1761 38.801 45.7481 38.4468 46.1699C38.0925 46.5917 37.6121 46.8286 37.1111 46.8286H23.8889C23.3879 46.8286 22.9075 46.5917 22.5532 46.1699C22.199 45.7481 22 45.1761 22 44.5796V17.5919C22 16.9954 22.199 16.4234 22.5532 16.0016C22.9075 15.5798 23.3879 15.3429 23.8889 15.3429ZM29.5556 44.5796H31.4444V42.3307H29.5556V44.5796ZM23.8889 17.5919V40.0817H37.1111V17.5919H23.8889Z" />
			</svg>
		`,
		pc:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="60" height="60" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V57C0 58.6569 1.34315 60 3 60H57C58.6569 60 60 58.6569 60 57V3C60 1.34315 58.6569 0 57 0H3ZM2 3C2 2.44772 2.44772 2 3 2H57C57.5523 2 58 2.44772 58 3V57C58 57.5523 57.5523 58 57 58H3C2.44772 58 2 57.5523 2 57V3ZM10 15H50V38.0351H10V15ZM8 15C8 13.8954 8.89543 13 10 13H50C51.1046 13 52 13.8954 52 15V38.0351C52 39.1397 51.1046 40.0351 50 40.0351H31.1401L31.1402 40.0583V43.9186C36.2342 44.0045 40.1951 44.6594 40.1951 45.4545C40.1951 46.308 35.6306 47 30 47C24.3694 47 19.8049 46.308 19.8049 45.4545C19.8049 44.684 23.5245 44.0452 28.3902 43.9282V40.0583L28.3904 40.0351H10C8.89543 40.0351 8 39.1397 8 38.0351V15Z" />
			</svg>
		`,
		printer:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="60" height="60" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H57C58.6569 0 60 1.34315 60 3V57C60 58.6569 58.6569 60 57 60H3C1.34315 60 0 58.6569 0 57V3ZM3 2C2.44772 2 2 2.44772 2 3V57C2 57.5523 2.44772 58 3 58H57C57.5523 58 58 57.5523 58 57V3C58 2.44772 57.5523 2 57 2H3ZM13 6C13 5.44772 13.4477 5 14 5H46C46.5523 5 47 5.44772 47 6V18H54C54.5523 18 55 18.4477 55 19V40C55 40.5523 54.5523 41 54 41H47V53C47 53.5523 46.5523 54 46 54H14C13.9655 54 13.9314 53.9983 13.8978 53.9948C13.3935 53.9436 13 53.5178 13 53V41H6C5.44771 41 5 40.5523 5 40L5 19.0014L5 19C5 18.4477 5.44772 18 6 18H13L13 6ZM53 20V39H47V35C47 34.4477 46.5523 34 46 34H14C13.4477 34 13 34.4477 13 35L13 35.0014L13 39H7L7 20H14H46H53ZM15 7H45V18H15L15 7ZM15 36H45V52H15L15 36ZM18 40C18 39.4477 18.4477 39 19 39H40C40.5523 39 41 39.4477 41 40C41 40.5523 40.5523 41 40 41H19C18.4477 41 18 40.5523 18 40ZM19 44C18.4477 44 18 44.4477 18 45C18 45.5523 18.4477 46 19 46H34C34.5523 46 35 45.5523 35 45C35 44.4477 34.5523 44 34 44H19ZM48.5 26C49.3284 26 50 25.3284 50 24.5C50 23.6716 49.3284 23 48.5 23C47.6716 23 47 23.6716 47 24.5C47 25.3284 47.6716 26 48.5 26Z" />
			</svg>
		`,
		internet:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="60" height="60" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V57C0 58.6569 1.34315 60 3 60H57C58.6569 60 60 58.6569 60 57V3C60 1.34315 58.6569 0 57 0H3ZM2 3C2 2.44772 2.44772 2 3 2H57C57.5523 2 58 2.44772 58 3V57C58 57.5523 57.5523 58 57 58H3C2.44772 58 2 57.5523 2 57V3ZM19.2058 44.9946L18.9653 44.9537L18.722 44.9718C18.4363 44.9931 18.1469 45.0025 17.8541 44.9994C12.3365 44.9417 7.9439 40.4719 8.00055 35.0572C8.04971 30.3577 11.4336 26.4392 15.9377 25.5243L17.1181 25.2845L17.4582 24.129C19.012 18.8502 23.8955 15 29.673 15C36.3908 15 41.8949 20.2044 42.3706 26.7998L42.4909 28.4673L44.1532 28.6446C48.2652 29.0834 51.4693 32.567 51.4693 36.7963C51.4693 41.3241 47.7987 44.9947 43.2709 44.9947C43.1077 44.9947 42.9459 44.9899 42.7855 44.9806L42.5954 44.9695L42.4066 44.9946L42.406 44.9946L42.4041 44.9947H19.2083L19.2062 44.9946L19.2058 44.9946ZM29.673 13C37.4472 13 43.8148 19.0221 44.3654 26.6559C49.4831 27.202 53.4693 31.5336 53.4693 36.7963C53.4693 42.4287 48.9033 46.9947 43.2709 46.9947C43.069 46.9947 42.8684 46.9888 42.6694 46.9772C42.5826 46.9887 42.494 46.9947 42.4041 46.9947H19.2083C19.0932 46.9947 18.9804 46.9849 18.8706 46.9663C18.5286 46.9918 18.1826 47.003 17.8332 46.9993C11.2299 46.9302 5.93225 41.5742 6.00066 35.0363C6.06003 29.3609 10.1436 24.6604 15.5396 23.5643C17.337 17.4577 22.9844 13 29.673 13Z" />
			</svg>`,
		router:`<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="60" height="60" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H57C58.6569 0 60 1.34315 60 3V57C60 58.6569 58.6569 60 57 60H3C1.34315 60 0 58.6569 0 57V3ZM3 2C2.44772 2 2 2.44772 2 3V57C2 57.5523 2.44772 58 3 58H57C57.5523 58 58 57.5523 58 57V3C58 2.44772 57.5523 2 57 2H3Z" />
			<path class="webix_diagram_shape_alt" fill-rule="evenodd" clip-rule="evenodd" d="M7.12114 11.4407C6.62539 11.6841 6.42084 12.2834 6.66426 12.7791L15.8604 31.5082H8C6.89543 31.5082 6 32.4036 6 33.5082V46.5082C6 47.6128 6.89543 48.5082 8 48.5082H51C52.1046 48.5082 53 47.6128 53 46.5082V33.5082C53 32.4036 52.1046 31.5082 51 31.5082H42.9865L52.1347 12.8768C52.3781 12.381 52.1736 11.7818 51.6778 11.5384C51.1821 11.295 50.5828 11.4995 50.3394 11.9953L40.7584 31.5082H18.0885L8.45952 11.8976C8.2161 11.4019 7.61689 11.1973 7.12114 11.4407ZM8 33.5082H51V46.5082H8V33.5082ZM38 41C38 41.5523 38.4477 42 39 42C39.5523 42 40 41.5523 40 41V38C40 37.4477 39.5523 37 39 37C38.4477 37 38 37.4477 38 38V41ZM43 42C42.4477 42 42 41.5523 42 41V38C42 37.4477 42.4477 37 43 37C43.5523 37 44 37.4477 44 38V41C44 41.5523 43.5523 42 43 42ZM46 41C46 41.5523 46.4477 42 47 42C47.5523 42 48 41.5523 48 41V38C48 37.4477 47.5523 37 47 37C46.4477 37 46 37.4477 46 38V41ZM29.707 14.5082C33.244 14.5082 36.544 15.8612 39 18.3172L40.414 16.9032C37.581 14.0692 33.778 12.5082 29.707 12.5082C25.636 12.5092 21.833 14.0692 19 16.9032L20.414 18.3172C22.87 15.8612 26.17 14.5082 29.707 14.5082ZM35.378 22.8152C32.304 19.7412 27.11 19.7412 24.036 22.8152L25.45 24.2292C27.757 21.9222 31.657 21.9222 33.964 24.2292L35.378 22.8152ZM21 19.8012C25.572 15.2272 33.301 15.2272 37.873 19.8012L36.459 21.2152C32.652 17.4082 26.221 17.4082 22.414 21.2152L21 19.8012Z" />
			</svg>
		` 
}