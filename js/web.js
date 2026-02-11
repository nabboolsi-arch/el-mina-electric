function toggleDetails(id) {

    const allDetails = document.querySelectorAll(".details");
    const current = document.getElementById(id);

    // إذا العنصر مفتوح -> أغلقه
    if (current.classList.contains("active")) {
        current.classList.remove("active");
        return;
    }

    // أغلق جميع العناصر
    allDetails.forEach(detail => {
        detail.classList.remove("active");
    });

    // افتح العنصر المطلوب
    current.classList.add("active");
}
